import { Star, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { REVIEWS } from "@/content";

const Reviews = () => (
  <section id="reviews" className="relative overflow-hidden bg-navy py-24 lg:py-32" data-testid="reviews-section">
    <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-royal/40 blur-[130px]" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Reviews</p>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="reviews-headline">
          Voices From <span className="text-gold-gradient">Our Community</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">
          What participants say about working and growing with Fin Growth India.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <Reveal key={i} delay={0.08 * (i % 3)}>
            <figure
              className="flex h-full flex-col rounded-2xl border border-ivory/10 bg-royal/30 p-6 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:bg-royal/50"
              data-testid={`review-card-${i + 1}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label="5 star rating">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <Quote size={20} className="text-gold/30" aria-hidden="true" />
              </div>
              <blockquote className="mt-5 flex-1 text-sm italic leading-relaxed text-ivory/85">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ivory/10 pt-4">
                <p className="font-display text-sm font-bold text-white">{review.name}</p>
                <p className="mt-0.5 text-xs text-mist">{review.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 text-center text-xs text-mist/70" data-testid="reviews-note">
          Participant reviews are published here as they are received. Names are abbreviated for privacy.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Reviews;
