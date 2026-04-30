import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getCourseBySlug } from "@/data/courses";
import { CourseHeader } from "@/components/course/CourseHeader";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOfferCard } from "@/components/course/CourseOfferCard";
import { CourseHowItWorks } from "@/components/course/CourseHowItWorks";
import { CourseFAQ } from "@/components/course/CourseFAQ";
import { CourseFinalCTA } from "@/components/course/CourseFinalCTA";
import { CourseFooter } from "@/components/course/CourseFooter";

const CoursePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;

  useEffect(() => {
    if (!course) return;
    const prevTitle = document.title;
    document.title = `${course.title} | Bio em Casa`;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = metaDesc?.content ?? "";
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = course.metaDescription;

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.href ?? "";
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/cursos/${course.slug}`;

    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.content = prevDesc;
      if (canonical && prevCanonical) canonical.href = prevCanonical;
    };
  }, [course]);

  if (!course) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <CourseHeader checkoutUrl={course.checkoutUrl} ctaText={course.ctaText} />
      <main>
        <CourseHero course={course} />
        <CourseOfferCard course={course} />
        <CourseHowItWorks course={course} />
        <CourseFAQ />
        <CourseFinalCTA course={course} />
      </main>
      <CourseFooter />
    </div>
  );
};

export default CoursePage;
