"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  Linkedin,
  Mail,
  Palette,
  Video,
  Users,
  MessageSquare,
  Play,
  X,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua")
  const [selectedVideoItem, setSelectedVideoItem] = useState<any>(null)
  const [showVideoOptions, setShowVideoOptions] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Desain",
      image: "/modern-brand-identity-design-mockup.jpg",
      description: "Identitas visual lengkap untuk startup teknologi",
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/colorful-social-media-posts-grid.jpg",
      description: "Kampanye media sosial untuk brand fashion",
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "Video",
      image: "/video-editing-timeline-with-colorful-clips.jpg",
      description: "Video promosi peluncuran produk baru",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "UI/UX Design Project",
      category: "Desain",
      image: "/mobile-app-interface-design-screens.png",
      description: "Desain antarmuka aplikasi mobile e-commerce",
    },
    {
      id: 5,
      title: "Content Creation",
      category: "Social Media",
      image: "/instagram-content-creation-flatlay.jpg",
      description: "Konten kreatif untuk Instagram dan TikTok",
    },
    {
      id: 6,
      title: "Motion Graphics",
      category: "Video",
      image: "/motion-graphics-frames.png",
      description: "Animasi motion graphics untuk explainer video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      externalLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Belajar dari 30+ Project Kreatif Saya",
      date: "15 Januari 2025",
      excerpt:
        "Perjalanan saya mengerjakan berbagai project kreatif selama masa kuliah dan pelajaran berharga yang saya dapatkan dari setiap project.",
      readTime: "5 menit",
    },
    {
      id: 2,
      title: "Tips Kolaborasi Tim untuk Designer Muda",
      date: "8 Januari 2025",
      excerpt:
        "Cara efektif berkomunikasi dan berkolaborasi dengan tim dari berbagai latar belakang dalam project kreatif.",
      readTime: "4 menit",
    },
    {
      id: 3,
      title: "Tools Desain Favorit untuk Fresh Graduate",
      date: "2 Januari 2025",
      excerpt:
        "Rekomendasi tools dan software yang saya gunakan untuk desain grafis, video editing, dan manajemen social media.",
      readTime: "6 menit",
    },
  ]

  const skills = [
    { icon: Palette, name: "Desain Grafis", description: "Adobe Creative Suite, Figma" },
    { icon: Video, name: "Video Editing", description: "Premiere Pro, After Effects" },
    { icon: MessageSquare, name: "Social Media", description: "Content Planning & Management" },
    { icon: Users, name: "Teamwork", description: "Kolaborasi & Komunikasi" },
  ]

  const filters = ["Semua", "Desain", "Video", "Social Media"]

  const filteredPortfolio =
    activeFilter === "Semua" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const handleVideoClick = (item: any) => {
    setSelectedVideoItem(item)
    setShowVideoOptions(true)
  }

  const handlePlayVideo = () => {
    setShowVideoOptions(false)
    setPlayingVideo(true)
  }

  const closeAllModals = () => {
    setShowVideoOptions(false)
    setPlayingVideo(false)
    setSelectedVideoItem(null)
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="fixed right-6 top-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="h-12 w-12 rounded-full shadow-lg transition-all hover:scale-110 bg-background/80 backdrop-blur-sm"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Simple animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20"></div>
          <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-muted/20 blur-3xl [animation-delay:2s]"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
                Fresh Graduate
              </Badge>
              <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Creative Designer
              </h1>
              <p className="text-pretty text-xl text-muted-foreground md:text-2xl">
                Fresh Graduate Universitas Trunojoyo Madura
              </p>
              <p className="text-balance text-base leading-relaxed text-foreground/80 md:text-lg">
                Lulusan baru yang tertarik industri kreatif, memiliki kemampuan kerjasama tim yang sangat baik dan
                komunikasi yang mudah dengan orang dari berbagai latar belakang. Selama kuliah telah mengerjakan{" "}
                <span className="font-semibold text-primary">30+ project</span> yang mencakup desain grafis, video
                editing, dan pengelolaan sosial media.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 transition-transform hover:scale-105">
                  <Mail className="h-4 w-4" />
                  Hubungi Saya
                </Button>
                <Button size="lg" variant="outline" className="transition-transform hover:scale-105 bg-transparent">
                  Lihat Portfolio
                </Button>
              </div>
            </div>

            {/* Right Column - Photos Grid */}
            <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 [animation-delay:200ms]">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/professional-creative-designer-portrait.jpg"
                      alt="Designer at work"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/colorful-social-media-posts-grid.jpg"
                      alt="Creative work"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/modern-brand-identity-design-mockup.jpg"
                      alt="Design project"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/mobile-app-interface-design-screens.png"
                      alt="UI Design"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                </div>
              </div>
              {/* Decorative floating element */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-muted/30 blur-2xl animate-pulse [animation-delay:1s]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Skills Section */}
      <section className="py-16 md:py-24" id="tentang">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Tentang Saya</h2>
              <p className="mb-12 text-center text-muted-foreground">Keahlian dan pengalaman yang saya miliki</p>
            </div>

            <div className="mb-12 rounded-lg bg-muted/50 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:100ms]">
              <p className="text-pretty leading-relaxed text-foreground/90">
                Sebagai fresh graduate dari Universitas Trunojoyo Madura, saya memiliki passion yang besar di bidang
                industri kreatif. Pengalaman saya dalam mengerjakan lebih dari 30 project selama masa kuliah telah
                mengasah kemampuan saya dalam desain grafis, video editing, dan manajemen social media. Saya percaya
                bahwa kreativitas terbaik lahir dari kolaborasi yang baik, dan saya selalu berusaha untuk berkomunikasi
                dengan efektif dengan setiap anggota tim, terlepas dari latar belakang mereka.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-muted/30 py-16 md:py-24" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Portfolio</h2>
              <p className="mb-8 text-center text-muted-foreground">Koleksi karya terbaik saya</p>
            </div>

            {/* Filter Buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-3 animate-in fade-in duration-700 [animation-delay:100ms]">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className="transition-all hover:scale-105"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPortfolio.map((item, index) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <Button
                          size="lg"
                          className="h-16 w-16 rounded-full transition-transform hover:scale-110"
                          onClick={() => handleVideoClick(item)}
                        >
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="mb-2 animate-in slide-in-from-bottom-2">{item.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-24" id="artikel">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Artikel & Wawasan</h2>
              <p className="mb-12 text-center text-muted-foreground">Pemikiran dan pengalaman saya</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Card
                  key={article.id}
                  className="group transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700"
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-balance group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-pretty text-muted-foreground">{article.excerpt}</p>
                    <Button
                      variant="link"
                      className="h-auto p-0 transition-transform hover:translate-x-2"
                      onClick={() => router.push(`/artikel/${article.id}`)}
                    >
                      Baca Selengkapnya →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-16 md:py-24" id="kontak">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Hubungi Saya</h2>
              <p className="mb-12 text-center text-muted-foreground">Mari bekerja sama untuk project Anda</p>
            </div>

            <Card className="animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:100ms]">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama
                      </label>
                      <Input id="name" placeholder="Nama Anda" className="transition-all focus:scale-[1.01]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        className="transition-all focus:scale-[1.01]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subjek
                    </label>
                    <Input id="subject" placeholder="Subjek pesan Anda" className="transition-all focus:scale-[1.01]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Ceritakan tentang project Anda..."
                      rows={6}
                      className="transition-all focus:scale-[1.01]"
                    />
                  </div>
                  <Button size="lg" className="w-full transition-transform hover:scale-105">
                    Kirim Pesan
                  </Button>
                </form>

                <div className="mt-8 border-t pt-8">
                  <p className="mb-4 text-center text-sm font-medium">Atau hubungi saya melalui:</p>
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 bg-transparent transition-transform hover:scale-110"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 bg-transparent transition-transform hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 bg-transparent transition-transform hover:scale-110"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Creative Designer Portfolio. All rights reserved.
          </p>
        </div>
      </footer>

      {showVideoOptions && selectedVideoItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={closeAllModals}
        >
          <div
            className="relative w-full max-w-md animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 -top-16 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
              onClick={closeAllModals}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="space-y-4">
              <h3 className="text-center text-2xl font-semibold text-white mb-6">Pilih Opsi</h3>

              {/* Card 1: Play in Modal */}
              <Card
                className="group cursor-pointer transition-all hover:scale-105 hover:shadow-xl bg-card/95 backdrop-blur"
                onClick={handlePlayVideo}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                    <Play className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Putar Video</h4>
                    <p className="text-sm text-muted-foreground">Tonton video di sini</p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Open YouTube Link */}
              <Card
                className="group cursor-pointer transition-all hover:scale-105 hover:shadow-xl bg-card/95 backdrop-blur"
                onClick={() => {
                  window.open(selectedVideoItem.externalLink, "_blank")
                  closeAllModals()
                }}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 transition-all group-hover:bg-red-500/20 group-hover:scale-110">
                    <ExternalLink className="h-7 w-7 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Buka di YouTube</h4>
                    <p className="text-sm text-muted-foreground">Tonton di platform asli</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {playingVideo && selectedVideoItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
          onClick={closeAllModals}
        >
          <div
            className="relative w-full max-w-5xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 -top-16 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
              onClick={closeAllModals}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
              <iframe
                src={selectedVideoItem.videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-center text-lg font-medium text-white">{selectedVideoItem.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}
