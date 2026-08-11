import { NextResponse } from "next/server";
import { testimonials as defaultTestimonials, Testimonial } from "@/app/lib/testimonials";

// In-memory store for dynamic reviews during runtime
let dynamicTestimonials: Testimonial[] = [];

export async function GET() {
  return NextResponse.json([...defaultTestimonials, ...dynamicTestimonials]);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, company, project, quote, rating } = body;

    if (!name || !quote || !rating) {
      return NextResponse.json(
        { error: "Le nom, la note et l'avis sont obligatoires." },
        { status: 400 }
      );
    }

    const avatars = ["👨🏽‍💼", "👩🏽‍💼", "🧑🏽‍💻", "👨🏼‍💻", "👩🏻‍💼", "👤"];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newTestimonial: Testimonial = {
      id: `dyn_${Date.now()}`,
      name: String(name).trim(),
      role: role ? String(role).trim() : "Client",
      company: company ? String(company).trim() : "Indépendant",
      avatar: randomAvatar,
      quote: String(quote).trim(),
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      project: project ? String(project).trim() : "Projet Web / Mobile",
    };

    dynamicTestimonials.unshift(newTestimonial);

    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'enregistrement de l'avis." },
      { status: 500 }
    );
  }
}
