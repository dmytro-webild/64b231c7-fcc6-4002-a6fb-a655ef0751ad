"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLarge"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="CreatorAI Hub"
          navItems={[
            { name: "Tools", id: "ai-tools" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="AI-Powered Content Creation"
          bottomRightText="hello@creatoraihub.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Create Viral Content with AI"
          description="Generate scripts, thumbnails, titles, and tags in seconds using powerful AI tools"
          buttons={[
            { text: "Generate with AI", href: "#ai-tools" },
            { text: "Learn More", href: "#how-it-works" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-modern-illustration-of-a-content-creat-1773211575963-755a8d23.png"
          imageAlt="Content creator using AI tools"
          showDimOverlay={true}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="ai-tools" data-section="ai-tools">
        <FeatureCardNineteen
          title="Powerful AI Tools for Creators"
          description="Everything you need to create viral YouTube and Reels content in one platform"
          tag="AI-Powered Tools"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Script Writing",              title: "AI Script Generator",              subtitle: "Engaging storytelling scripts with hooks",              description: "Generates compelling storytelling scripts with powerful hooks and call-to-action elements. Create scripts that capture attention in the first 3 seconds and keep viewers engaged throughout.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-clean-modern-icon-representing-script--1773211579502-616ecf4c.png",              imageAlt: "Script generation AI icon"
            },
            {
              id: 2,
              tag: "Visual Design",              title: "AI Thumbnail Generator",              subtitle: "Clickable thumbnail concepts instantly",              description: "Creates unique and clickable thumbnail concepts that stand out in YouTube feeds. Get instant AI-powered design suggestions based on current trending aesthetics.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-modern-icon-for-thumbnail-generation-d-1773211575759-6a98504b.png",              imageAlt: "Thumbnail generation AI icon"
            },
            {
              id: 3,
              tag: "SEO Optimization",              title: "AI Title Generator",              subtitle: "Viral YouTube title suggestions",              description: "Generates viral YouTube titles optimized for click-through rates and search algorithms. Get multiple title options with A/B testing suggestions built-in.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-clean-icon-for-title-generation-show-t-1773211575695-8294f10f.png",              imageAlt: "Title generation AI icon"
            },
            {
              id: 4,
              tag: "Search Ranking",              title: "AI Tag Generator",              subtitle: "SEO optimized tags for reach",              description: "Generates SEO optimized tags and hashtags to maximize your video's discoverability. Analyze trending tags and competitor strategies automatically.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-modern-icon-for-tag-generation-display-1773211575841-57e384db.png",              imageAlt: "Tag generation AI icon"
            },
            {
              id: 5,
              tag: "Short-Form Content",              title: "AI Shorts/Reels Generator",              subtitle: "Viral short-form video ideas",              description: "Creates viral short-form video ideas perfect for YouTube Shorts, Instagram Reels, and TikTok. Get script suggestions, trending hooks, and editing recommendations.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-modern-icon-for-short-form-video-conte-1773211577760-3e8619ee.png",              imageAlt: "Short-form video AI icon"
            }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardNineteen
          title="How It Works"
          description="Create viral content in three simple steps"
          tag="Simple Process"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Step 1",              title: "Enter Your Topic",              subtitle: "Share your video idea or topic",              description: "Simply type in a video topic or idea you want to create content about. Describe your niche, target audience, or specific concept. The AI will understand the context and your content goals.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-minimalist-icon-for-step-1-showing-a-t-1773211579939-e35ade1b.jpg",              imageAlt: "Step 1 input icon"
            },
            {
              id: 2,
              tag: "Step 2",              title: "AI Generates Content Instantly",              subtitle: "Get professional content in seconds",              description: "Our advanced AI engine processes your input and generates high-quality content instantly. Get scripts, thumbnail ideas, titles, tags, and short-form video concepts all at once.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-minimalist-icon-for-step-2-showing-ai--1773211575473-23ecbc18.png",              imageAlt: "Step 2 AI generation icon"
            },
            {
              id: 3,
              tag: "Step 3",              title: "Copy and Use for Your Video",              subtitle: "Ready to publish immediately",              description: "Copy the generated content with a single click and use it directly for your videos. Edit as needed, upload to your platform, and watch your engagement soar with optimized content.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-minimalist-icon-for-step-3-showing-cop-1773211574978-5cb3106e.png",              imageAlt: "Step 3 copy icon"
            }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Plan"
          description="Flexible pricing designed for creators of all levels"
          tag="Affordable Plans"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "free",              badge: "Free",              price: "$0",              subtitle: "Perfect for getting started",              features: [
                "5 AI generations per day",                "Basic script templates",                "Standard title suggestions",                "Community support"
              ]
            },
            {
              id: "pro",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "₹499",              subtitle: "Per month - Best for serious creators",              features: [
                "Unlimited AI generations",                "Advanced script generation",                "Viral title optimization",                "Advanced SEO tag generation",                "Thumbnail AI enhancements",                "Priority email support",                "Monthly trend reports",                "Custom templates"
              ]
            }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Creators Love CreatorAI Hub"
          description="Join thousands of content creators who've gone viral with our AI tools"
          tag="Success Stories"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Aisha Patel",              role: "YouTube Creator",              company: "Tech & Lifestyle",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-professional-headshot-photo-of-a-young-1773211575803-32031191.png",              imageAlt: "Aisha Patel headshot"
            },
            {
              id: "2",              name: "Marcus Chen",              role: "Content Strategist",              company: "Digital Growth Co",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-professional-headshot-of-a-female-cont-1773211575624-1cc29a2a.png",              imageAlt: "Marcus Chen headshot"
            },
            {
              id: "3",              name: "Sofia Rodriguez",              role: "Reels Producer",              company: "Creative Studio",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-professional-headshot-of-a-male-conten-1773211575091-e0d16a57.png",              imageAlt: "Sofia Rodriguez headshot"
            },
            {
              id: "4",              name: "James Whitfield",              role: "Video Editor",              company: "Content House",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AmxLJScmEurognFRAVpq69F8Ut/a-professional-headshot-of-another-conte-1773211577735-177d196f.png",              imageAlt: "James Whitfield headshot"
            }
          ]}
          kpiItems={[
            { value: "10,000+", label: "Creators empowered" },
            { value: "500M+", label: "Views generated" },
            { value: "98%", label: "Satisfaction rate" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigate",              items: [
                { label: "Home", href: "#" },
                { label: "Tools", href: "#ai-tools" },
                { label: "Pricing", href: "#pricing" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Blog", href: "#" },
                { label: "Guides", href: "#" },
                { label: "FAQ", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "YouTube", href: "https://youtube.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 CreatorAI Hub. All rights reserved."
          bottomRightText="Powered by AI for Creators"
        />
      </div>
    </ThemeProvider>
  );
}