import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Le nom, l'email et le message sont obligatoires." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "L'adresse email fournie est invalide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL_TO || "roscabangoulou@gmail.com";
    let fromEmail = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";

    // Auto-fallback pour Resend si le domaine n'est pas encore vérifié ou est un placeholder
    if (fromEmail.includes("tondomaine.com") || fromEmail.includes("example.com")) {
      fromEmail = "onboarding@resend.dev";
    }

    if (!apiKey || apiKey === "re_ta_cle_ici") {
      console.warn("RESEND_API_KEY non configurée. Envoi simulé.");
      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message: "Message bien reçu ! (Mode démo : ajoutez votre vraie RESEND_API_KEY dans .env.local pour un envoi effectif)",
        },
        { status: 200 }
      );
    }

    const isValidToEmail = !!toEmail && EMAIL_REGEX.test(toEmail);

    if (!isValidToEmail) {
      console.warn("CONTACT_EMAIL_TO non défini ou invalide. Envoi simulé.");
      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message:
            "Message bien reçu ! (Mode démo : configurez CONTACT_EMAIL_TO dans .env.local avec une adresse email valide et utilisez une clé Resend appropriée.)",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `Portfolio Rosca <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: subject ? `[Contact Portfolio] ${subject}` : `Nouveau message de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Nouveau message de contact</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 32px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e4e4e7;">
              <div style="border-bottom: 2px solid #D9491F; padding-bottom: 16px; margin-bottom: 24px;">
                <h1 style="color: #18181b; font-size: 22px; font-weight: 800; margin: 0;">Nouveau message de contact</h1>
                <p style="color: #71717a; font-size: 14px; margin-top: 4px; margin-bottom: 0;">Envoyé depuis le portfolio web</p>
              </div>

              <div style="margin-bottom: 16px;">
                <strong style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Expéditeur</strong>
                <span style="color: #18181b; font-size: 16px; font-weight: 600;">${name}</span>
              </div>

              <div style="margin-bottom: 16px;">
                <strong style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Email</strong>
                <a href="mailto:${email}" style="color: #D9491F; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
              </div>

              ${
                subject
                  ? `<div style="margin-bottom: 16px;">
                      <strong style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Sujet</strong>
                      <span style="color: #18181b; font-size: 16px;">${subject}</span>
                    </div>`
                  : ""
              }

              <div style="margin-top: 24px;">
                <strong style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;">Message</strong>
                <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-left: 4px solid #D9491F; border-radius: 8px; padding: 16px; color: #27272a; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #f4f4f5; text-align: center; font-size: 12px; color: #a1a1aa;">
                Vous pouvez répondre directement à cet email pour contacter ${name}.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erreur d'envoi de mail Resend:", error);

      const rawMsg = typeof error.message === "string" ? error.message : "";
      const lower = rawMsg.toLowerCase();

      let frenchError = "Échec de l'envoi du mail via Resend.";

      if (lower.includes("testing emails to your own email address")) {
        frenchError = "En mode test Resend, vous pouvez uniquement envoyer des emails à votre propre adresse de compte (roscabangoulou@gmail.com). Pour envoyer vers d'autres adresses, veuillez vérifier un nom de domaine sur resend.com/domains.";
      } else if (lower.includes("invalid `to` field") || lower.includes("invalid to field")) {
        frenchError = "Adresse destinataire invalide pour la clé Resend utilisée. Vérifiez CONTACT_EMAIL_TO dans votre fichier .env.local.";
      } else if (lower.includes("verify a domain") || lower.includes("domain")) {
        frenchError = "Le domaine d'expéditeur n'est pas encore vérifié sur Resend. Utilisez onboarding@resend.dev ou ajoutez votre domaine sur resend.com/domains.";
      } else if (rawMsg) {
        frenchError = `Erreur Resend : ${rawMsg}`;
      }

      return NextResponse.json(
        { error: frenchError },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Votre message a été envoyé avec succès !",
    });
  } catch (err) {
    console.error("Erreur serveur API Contact:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Une erreur est survenue lors du traitement du message." },
      { status: 500 }
    );
  }
}
