import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Eye,
  Heart,
  Medal,
  Music2,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';
import Seo from '../components/common/Seo';
import legacyImg from '../assets/51years.png';

const floors = [
  {
    name: 'Basement',
    category: 'Fitness & Gym Equipment',
    description: 'Supporting strength, fitness and healthier lifestyles.',
    icon: Target,
  },
  {
    name: 'Ground Floor',
    category: 'Sports',
    description: 'Sports products and equipment for players, schools and institutions.',
    icon: Trophy,
  },
  {
    name: 'First Floor',
    category: 'Toys',
    description: 'Bringing happiness, creativity and fun to children.',
    icon: Sparkles,
  },
  {
    name: 'Second Floor',
    category: 'Trophies',
    description: 'Celebrating achievements, victories and unforgettable milestones.',
    icon: Medal,
  },
  {
    name: 'Third Floor',
    category: 'Musical Instruments',
    description: 'Inspiring creativity and nurturing musical talent.',
    icon: Music2,
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F5F6F8]">
      <Seo
        title="About Jai Sports | Trichy's Sports Shop Since 1975"
        description="Learn about Jai Sports, a family-run sports shop in Trichy serving athletes, schools and sports lovers since 1975."
        keywords={['Jai Sports history', 'sports shop in Trichy']}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#101B4B] via-[#142159] to-[#0A1132] py-16 text-white sm:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F04423_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FFA08A]">
                JAI SPORTS · EST. 1975
              </p>
              <h1 className="font-outfit text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                A Legacy of Passion.
                <span className="block text-[#F04423]">A Tradition of Trust.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Every great journey begins with a passion. For JAI SPORTS, that
                passion began with a deep love for sports during the school days
                of our founder, N. John Sundar, M.Sc.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                What started in 1975 as a humble 10 × 20 sq. ft. shop has grown
                into a multi-floor destination spanning approximately 29 × 85 sq.
                ft., built on dedication, quality and lasting customer
                relationships.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <img
                src={legacyImg}
                alt="51 Years of Jai Sports, 1975–2027"
                decoding="async"
                className="mx-auto w-full max-w-md rounded-3xl object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="relative mx-auto flex aspect-[4/5] max-w-sm flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#101B4B] to-[#243582] p-8 text-center text-white shadow-xl">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
              <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full border border-white/10" />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#F04423] bg-white/10 font-outfit text-4xl font-black tracking-wider text-white shadow-lg">
                NJS
              </div>
              <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#FFA08A]">
                Founder · Since 1975
              </p>
              <h2 className="relative mt-2 font-outfit text-2xl font-black">
                N. John Sundar
              </h2>
              <p className="relative mt-1 text-sm text-slate-300">M.Sc.</p>
              <div className="relative mt-7 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold">
                <Award className="h-4 w-4 text-[#F04423]" />
                <span>A passion that became a legacy</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F04423]">
              Our Founder
            </p>
            <h2 className="mt-3 font-outfit text-3xl font-black text-[#101B4B] sm:text-4xl">
              One love for sports. A vision for generations.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#555555]">
              <p>
                JAI SPORTS began with the enthusiasm of our founder,
                <strong className="text-[#101B4B]"> N. John Sundar, M.Sc.</strong>,
                whose love for sports took root during his school days. In
                1975, he turned that passion into a small 10 × 20 sq. ft. shop
                with a simple purpose: to bring quality sports products within
                reach of the community.
              </p>
              <p>
                Through dedication, quality and the trust of generations of
                customers, that humble beginning grew into the multi-floor
                destination JAI SPORTS is today. The vision behind the shop
                still guides us: bring people closer to sports, encourage
                active lifestyles and make quality products accessible to
                everyone.
              </p>
              <p>
                More than five decades later, we continue to carry that
                founding spirit forward—serving players, families, schools and
                institutions across Tiruchirappalli.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-l-4 border-[#F04423] bg-[#FFF0ED] px-5 py-4 text-sm font-semibold leading-relaxed text-[#101B4B] sm:text-base">
              <Heart className="h-5 w-5 shrink-0 text-[#F04423]" />
              <span>Quality in every product. Trust in every relationship. Passion in everything we do.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F04423]">
              Our Journey
            </p>
            <h2 className="mt-3 font-outfit text-3xl font-black text-[#101B4B] sm:text-4xl">
              From a small beginning to a bigger vision
            </h2>
            <p className="mt-4 leading-relaxed text-[#555555]">
              Our growth has never been just about expanding our store. It has
              always been about expanding our vision. Today, JAI SPORTS brings
              together multiple categories under one roof.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {floors.map((floor, index) => {
              const Icon = floor.icon;
              return (
                <motion.article
                  key={floor.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0ED] text-[#F04423]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#F04423]">
                    {floor.name}
                  </p>
                  <h3 className="mt-1 font-outfit text-xl font-bold text-[#101B4B]">
                    {floor.category}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                    {floor.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm leading-relaxed text-[#555555]">
            From a small beginning to a destination serving generations of
            customers, every step reflects our commitment to continuous growth.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0ED] text-[#F04423]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#F04423]">
              Built on Quality. Strengthened by Trust.
            </p>
            <h2 className="mt-3 font-outfit text-3xl font-black text-[#101B4B] sm:text-4xl">
              Customers at the heart of everything we do.
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-[#555555]">
              <p>
                For more than 50 years, our customers have been at the heart of
                everything we do. Our long-standing relationships with
                schools, colleges, sports institutions and individual
                customers across Tiruchirappalli are among our proudest
                achievements.
              </p>
              <p>
                We believe that a product is more than just a purchase. It
                represents a player’s ambition, a student’s achievement, a
                team’s victory or a child’s happiness.
              </p>
              <p>
                That is why we remain committed to providing quality products,
                dependable service and a customer experience built on trust.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#101B4B] p-8 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F04423]/10 blur-2xl" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#FFA08A]">
                <Eye className="h-6 w-6" />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#FFA08A]">
                Our Vision · A Healthier Trichy
              </p>
              <h2 className="mt-3 font-outfit text-3xl font-black sm:text-4xl">
                A more active, healthier and sports-loving Tiruchirappalli.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                Our ambition is to inspire more children to play, encourage
                young talents to pursue sports, support educational
                institutions and help people embrace fitness as a way of life.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                We aspire to be recognised as the No. 1 sports and lifestyle
                destination in the district, not just through the products we
                offer, but through the positive impact we create in our
                community.
              </p>
              <div className="mt-8 flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-semibold">
                <Target className="h-5 w-5 text-[#F04423]" />
                <span>Growing together with our community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#101B4B] to-[#18286E] py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFA08A]">
              More than a store
            </p>
            <h2 className="mt-3 font-outfit text-3xl font-black sm:text-4xl">
              A legacy that keeps growing.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              From the first customer who trusted us in 1975 to every customer
              who walks through our doors today, every relationship has helped
              shape who we are. JAI SPORTS — Celebrating Passion. Inspiring
              Generations.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#F04423] px-6 py-3 font-bold text-white transition-colors hover:bg-[#D63617]"
          >
            Explore our products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
