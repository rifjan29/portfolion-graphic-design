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
  Briefcase,
  Calendar,
  TrendingUp,
  Award,
  Clock,
  User,
  Tag,
  Info,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua")
  const [selectedVideoItem, setSelectedVideoItem] = useState<any>(null)
  const [showVideoOptions, setShowVideoOptions] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const router = useRouter()
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null)
  const [showPortfolioDetail, setShowPortfolioDetail] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const portfolioItems = [
    // After Movie Videos
    {
      id: 1,
      title: "After Movie - Water Run Dispopar 3K Kota Probolinggo",
      category: "Video",
      image: "/after-movie-event-university-students.jpg",
      description: "Video dokumentasi event Water Run Dispopar 3K Kota Probolinggo",
      videoUrl: "https://www.youtube.com/embed/QsZrU0G4D20",
      externalLink: "https://youtu.be/QsZrU0G4D20?si=MRpLAstTB50dKnCn",
      client: "DISPOPAR Kota Probolinggo",
      date: "Desember 2025",
      duration: "2 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Capcut"],
      role: "Video Editor & Colorist",
      details:
      "After movie yang menampilkan keseruan event Water Run Dispopar 3K dengan highlight peserta, suasana acara, dan momen-momen menarik lainnya. Menggunakan teknik editing dinamis dan color grading yang vibrant untuk hasil yang menarik.",
    },
    {
      id: 2,
      title: "After Movie - Walk To Harmony 2025",
      category: "Video",
      image: "/graduation-ceremony-after-movie.jpg",
      description: "Jalan Sehat Walk To Harmony 2025",
      videoUrl: "https://www.youtube.com/embed/W4V6qwHP9Fw",
      externalLink: "https://youtu.be/W4V6qwHP9Fw?si=A2fUlOTJeZTcwzKd",
      client: "BPPKAD Kabupaten Probolinggo",
      date: "Desember 2025",
      duration: "7 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Capcut"],
      role: "Videographer & Editor",
      details:
      "Jalan Sehat Walk To Harmony 2025 yang menampilkan semangat kebersamaan dan kesehatan dengan visual yang energik dan musik yang upbeat. Fokus pada peserta, suasana acara, dan momen-momen inspiratif selama acara berlangsung.",
    },
    {
      id: 3,
      title: "After Movie - Anugerah Inklusif 4",
      category: "Video",
      image: "/art-festival-after-movie.jpg",
      description: "Apresiasi event penghargaan untuk anak disabilitas",
      videoUrl: "https://www.youtube.com/embed/dmRMB1l2ScQ",
      externalLink: "https://youtu.be/dmRMB1l2ScQ?si=MhIjdJOptINO9XTl",
      client: "DISDIKBUD Kota Probolinggo",
      date: "November 2025",
      duration: "2 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Capcut"],
      role: "Video Editor",
      details:
      "After movie Anugerah Inklusif 4 yang menampilkan momen-momen berharga dari event penghargaan untuk anak disabilitas. Menyoroti kebahagiaan, prestasi, dan semangat inklusivitas dengan editing yang menyentuh hati dan visual yang penuh warna.",
    },
    {
      id: 4,
      title: "After Movie - Gebyar Anugerah Inklusif",
      category: "Video",
      image: "/national-seminar-event.jpg",
      description: "Apresiasi event penghargaan untuk anak disabilitas",
      videoUrl: "https://www.youtube.com/embed/7Op6a0yNMXc",
      externalLink: "https://youtu.be/7Op6a0yNMXc?si=CpaNAhy-5xKkwg3k",
      client: "DISDIKBUD Kota Probolinggo",
      date: "November 2025",
      duration: "3 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Capcut"],
      role: "Video Editor & Motion Designer",
      details:
      "After movie Gebyar Anugerah Inklusif yang menampilkan sorotan acara penghargaan untuk anak disabilitas. Menampilkan momen-momen inspiratif, kebahagiaan, dan semangat inklusivitas dengan editing yang dinamis dan visual yang menarik.",
    },
    // Profile Videos
    {
      id: 6,
      title: "Transparasi Desa Ranugedang",
      category: "Video",
      image: "/student-organization-profile.jpg",
      description: "Profil Desa Ranugedang Kabupaten Probolinggo",
      videoUrl: "https://www.youtube.com/embed/bDZjdUHVI-s",
      externalLink: "https://youtu.be/bDZjdUHVI-s?si=zawgcs34aFrNDYzv",
      client: "Pemerintah Desa Ranugedang",
      date: "Maret 2025",
      duration: "3 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
      role: "Video Producer & Editor",
      details:
        "Vidoe profil desa yang menampilkan potensi, budaya, dan program pembangunan desa dengan pendekatan storytelling yang menarik dan visual yang informatif.",
    },
    {
      id: 7,
      title: "Transparasi Desa Gondosuli",
      category: "Video",
      image: "/engineering-faculty-profile.jpg",
      description: "Profil Desa Gondosuli Kabupaten Probolinggo",
      videoUrl: "https://www.youtube.com/embed/wXv_3R8PLyM",
      externalLink: "https://youtu.be/wXv_3R8PLyM?si=69oIgAVZOShj8OdB",
      client: "Fakultas Teknik UTM",
      date: "April 2025",
      duration: "4 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Illustrator"],
      role: "Videographer & Editor",
      details:
        "Vidoe profil desa yang menampilkan potensi, budaya, dan program pembangunan desa dengan pendekatan storytelling yang menarik dan visual yang informatif.",
    },
    

    // Short Movie
    {
      id: 11,
      title: "Short Movie - KEDOK MASA LALU | FILM PENDEK",
      category: "Video",
      image: "/short-film-student-struggle.jpg",
      description: "Film pendek tentang perjuangan seorang yang ingin kembali ke masa lalu",
      videoUrl: "https://www.youtube.com/embed/57Vl-3lLMfo",
      externalLink: "https://youtu.be/57Vl-3lLMfo?si=YmSH4ECjt1iZtG7Z",
      client: "Project Personal",
      date: "Desember 2024",
      duration: "15 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Audition", "DaVinci Resolve"],
      role: "Director, Scripter, Editor",
      details:
      "Film pendek yang mengisahkan perjuangan seorang individu yang berusaha kembali ke masa lalu untuk memperbaiki kesalahan. Menggunakan teknik sinematografi yang kreatif dan narasi yang mendalam untuk menyampaikan pesan tentang penyesalan dan harapan.",
    },
    {
      id: 12,
      title: "Short Movie - PETAKA CINTA ORGANISASI | FILM PENDEK ORGANISASI",
      category: "Video",
      image: "/friendship-short-film.jpg",
      description: "Film pendek tentang persahabatan dalam organisasi",
      videoUrl: "https://www.youtube.com/embed/KaL5P8A1ghg",
      externalLink: "https://youtu.be/KaL5P8A1ghg?si=H5etJ8VDD5lVNmhA",
      client: "Project Personal",
      date: "September 2024",
      duration: "1 menit",
      tools: ["Adobe Premiere Pro", "After Effects", "Audition"],
      role: "Director, Cameraman, Editor",
      details: "Cerita menyentuh tentang persahabatan dengan visual yang cinematik dan musik yang emosional.",
    },
    {
      id: 13,
      title: "Short Movie - NYANYIAN PELANGI -- FILM EDUKASI",
      category: "Video",
      image: "/inspirational-short-movie.jpg",
      description: "Film pendek edukasi dengan pesan inspiratif untuk generasi muda",
      videoUrl: "https://www.youtube.com/embed/qHgPv8S2Xh0",
      externalLink: "https://youtu.be/qHgPv8S2Xh0?si=0UUb0fw1_48MDbpn",
      client: "Project Personal",
      date: "Oktober 2022",
      duration: "10 menit",
      tools: ["Adobe Premiere Pro", "After Effects"],
      role: "Scripter, Cameraman, Editor",
      details:
        "Film pendek edukasi yang mengangkat tema inspiratif untuk generasi muda dengan visual yang menarik dan narasi yang kuat.",
    },

    // Podcast
    {
      id: 14,
      title: "Jagongan Wakil Rakyat Bersama Mas Zaini",
      category: "Video",
      image: "/podcast-studio-students-talking.jpg",
      description: "Guru Garda Terdepan Membangun Bangsa",
      videoUrl: "https://www.youtube.com/embed/ksGV8RNQPI4",
      externalLink: "https://youtu.be/ksGV8RNQPI4?si=cAa_Vj3ARZo1OpfG",
      client: "Project Personal",
      date: "November 2025",
      duration: "30 menit",
      tools: ["Adobe Premiere Pro", "Audition", "Photoshop"],
      role: "Cameraman",
      details:
        "Podcast edukasi dengan visual yang engaging dan audio mixing yang jernih untuk pengalaman mendengar yang nyaman.",
    },
    {
      id: 16,
      title: "Podcast - Program 100 Hari Kerja Wali Kota Probolinggo",
      category: "Video",
      image: "/placeholder.svg?height=400&width=600",
      description: "Dr. Aminuddin Buka-bukaan Program 100 Hari Kerja Wali Kota Probolinggo",
      videoUrl: "https://www.youtube.com/embed/ROwCl2J-V7Q",
      externalLink: "https://youtu.be/ROwCl2J-V7Q?si=Fe7FnqhQiRvAclkk",
      client: "Project Personal",
      date: "Februari 2025",
      duration: "40 menit",
      tools: ["Adobe Premiere Pro", "Audition", "Photoshop"],
      role: "Cameraman",
      details:
        "Podcast edukasi dengan visual yang clean dan audio mixing yang jernih untuk pengalaman mendengar yang nyaman.",
    },

    // Video Edukasi
    {
      id: 17,
      title: "Video Edukasi - CAHAYA LITERASI DI DALAM LAPAS",
      category: "Video",
      image: "/placeholder.svg?height=400&width=600",
      description: "Edukasi literasi di dalam warga binaan lapas",
      videoUrl: "https://www.youtube.com/embed/FVbEncZkbnY",
      externalLink: "https://youtu.be/FVbEncZkbnY?si=T12aopwjKgONLWJl",
      client: "Project Personal",
      date: "Mei 2025",
      duration: "20 menit",
      tools: ["Adobe Premiere Pro", "Screen Recording Software"],
      role: "Content Creator & Editor",
      details: "Video edukasi yang menyajikan informasi literasi dengan cara yang menarik dan mudah dipahami, menggunakan animasi dan visual yang engaging.",
    },

    // Design Projects (keeping some design items)
    {
      id: 18,
      title: "Content Plan",
      category: "Content Plan",
      image: "/modern-brand-identity-design-mockup.jpg",
      description: "Rencana konten untuk semua platform media sosial",
      client: "Alfatih Corp Batch",
      date: "OKtober 2023",
      duration: "3 Bulan",
      tools: ["Spreadsheet", "Trello", "Canva"],
      role: "Content Planner",
      details:
        "Menciptakan content plan terstruktur untuk berbagai platform media sosial dengan fokus pada tren dan engagement audiens.",
    },
    {
      id: 19,
      title: "Progress Report",
      category: "Progress Report",
      image: "/colorful-social-media-posts-grid.jpg",
      description: "Laporan kemajuan dan analitik media sosial",
      client: "PW IPP Jawa Timur",
      date: "Agustus 2025",
      duration: "1 bulan",
      tools: ["Insight Tools", "Google Analytics", "Excel"],
      role: "Content Planner & Analyst",
      details:
        "Merancang laporan kemajuan media sosial dengan analitik mendalam untuk mengukur performa konten dan strategi yang diterapkan.",
    },
    {
      id: 20,
      title: "SOSMED Yang Pernah Ditangani",
      category: "Portfolio Sosmed",
      image: "/mobile-app-interface-design-screens.png",
      description: "Memenage Sosial Media untuk berbagai klien",
      client: "Multiple Clients",
      date: "Oktober 2023 - Sekarang",
      duration: "3 minggu",
      tools: ["Adobe XD", "Canva", "Capcut", "Instagram Insights", "Photoshop"],
      role: "Content Planner, Designer, Video Editor",
      details:
        "Mengelola berbagai akun media sosial dengan strategi konten yang disesuaikan untuk meningkatkan jangkauan dan engagement audiens.",
    },

    {
      id: 21,
      title: "Wedding - Pernikahan",
      category: "Video",
      image: "/placeholder.svg?height=400&width=600",
      description: "Video dokumentasi pernikahan",
      videoUrl: "https://www.youtube.com/embed/FVbEncZkbnY",
      externalLink: "https://youtu.be/FVbEncZkbnY?si=T12aopwjKgONLWJl",
      client: "Project Personal",
      date: "Juni 2025",
      duration: "20 menit",
      tools: ["Adobe Premiere Pro", "Screen Recording Software"],
      role: "Content Creator & Editor",
      details: "Video dokumentasi pernikahan yang menyajikan momen-momen penting dengan kualitas visual yang menarik dan editing yang profesional.",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Moge yang Dikendarai Pasutri Dokter Tak Terdaftar",
      date: "15 Januari 2025",
      excerpt:
        "Hasil olah TKP polisi sementara karena korban kaget karena ada motor nyebrang. Investigasi kecelakaan yang melibatkan moge tak terdaftar.",
      readTime: "4 menit",
      externalLink:
        "https://radarbromo.jawapos.com/probolinggo/1004597380/moge-yang-dikendarai-pasutri-dokter-tak-terdaftar-hasil-olah-tkp-polisi-sementara-karena-korban-kaget-karena-ada-motor-nyebrang",
      category: "Berita Lokal",
    },
    {
      id: 2,
      title: "Siapkan Delapan Gelas Air Empat Warna di Patung Gajah Mada",
      date: "12 Januari 2025",
      excerpt:
        "Di Madakaripura, ritual unik dengan delapan gelas air empat warna di patung Gajah Mada. Begini kata juru kunci tentang tradisi tersebut.",
      readTime: "5 menit",
      externalLink:
        "https://radarbromo.jawapos.com/probolinggo/1004849719/siapkan-delapan-gelas-air-empat-warna-di-patung-gajah-mada-di-madakaripura-begini-kata-juru-kunci",
      category: "Budaya & Tradisi",
    },
    {
      id: 3,
      title: "Baru 366 Jemaah Kab Probolinggo Kloter 33 yang Tiba di Tanah Air",
      date: "10 Januari 2025",
      excerpt:
        "Kepulangan jemaah haji Kabupaten Probolinggo kloter 33 tiba di tanah air. Update terbaru perjalanan ibadah haji tahun ini.",
      readTime: "3 menit",
      externalLink:
        "https://radarbromo.jawapos.com/kraksaan/1004817148/baru-366-jemaah-kab-probolinggo-kloter-33-yang-tiba-di-tanah-air",
      category: "Religi",
    },
    {
      id: 4,
      title: "Emak-emak Jadi Korban Begal di Leces, Motor Beat Amblas",
      date: "8 Januari 2025",
      excerpt:
        "Kasus pembegalan di wilayah Leces menimpa seorang ibu. Motor Beat yang dikendarai korban raib dibawa pelaku.",
      readTime: "4 menit",
      externalLink:
        "https://radarbromo.jawapos.com/probolinggo/1004802233/emak-emak-jadi-korban-begal-di-leces-motor-beat-amblas",
      category: "Kriminal",
    },
    {
      id: 5,
      title: "Difabel Sejak Lahir Tapi Tidak Pernah Ingin Mengemis",
      date: "5 Januari 2025",
      excerpt:
        "Kisah inspiratif seorang difabel yang memilih untuk mandiri dan tidak pernah berkeinginan untuk mengemis atau dikasihani.",
      readTime: "6 menit",
      externalLink:
        "https://radarbromo.jawapos.com/love-life-story/1004447287/difabel-sejak-lahir-tapi-tidak-pernah-ingin-mengemis-dan-dikasihani",
      category: "Inspirasi",
    },
  ]

  const skills = [
    { icon: Palette, name: "Desain Grafis", description: "Adobe Creative Suite, Figma" },
    { icon: Video, name: "Video Editing", description: "Premiere Pro, After Effects" },
    { icon: MessageSquare, name: "Social Media", description: "Content Planning & Management" },
    { icon: Users, name: "Teamwork", description: "Kolaborasi & Komunikasi" },
  ]

  const workExperience = [
    {
      company: "Jawa Pos Radar Bromo",
      position: "Jurnalis, Tim Online & Event Organizer",
      period: "Desember 2022 - Sekarang",
      type: "Full Time",
      achievements: [
        "Mengelola semua sosial media perusahaan dengan konten lokal dan menarik",
        "Meliput berita nasional dengan 10-15 artikel per hari",
        "Bertanggung jawab sebagai cameraman dan videographer dalam event organizing",
        "Menjadi fotografer backup untuk peliputan berita",
      ],
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      company: "Freelance Editor Video",
      position: "Individual & Tim Freelance",
      period: "Maret 2022 - Sekarang",
      type: "Freelance",
      achievements: [
        "Menyelesaikan 30+ project video editing untuk berbagai klien",
        "Memimpin tim pembuatan film pendek sebagai scripter, cameraman, dan editor",
        "Mengelola personal branding di platform digital",
        "Bertanggung jawab atas project dari client sesuai deadline",
      ],
      icon: Video,
      color: "bg-purple-500",
    },
    {
      company: "Kanal YouTube Irul Lin TV",
      position: "Editor Video",
      period: "Mei 2021 - Januari 2022",
      type: "Contract",
      achievements: [
        "Bekerjasama dengan tim untuk menyelesaikan konten sesuai deadline",
        "Meningkatkan kualitas konten dengan memperhatikan algoritma YouTube",
        "Menyelesaikan editing video pengetahuan umum dengan capaian 41 ribu viewer",
        "Mengelola bahan konten (audio dan visual) agar aman dari copyright",
      ],
      icon: Award,
      color: "bg-red-500",
    },
  ]

  const filters = ["Semua","Video", "Content Plan","Progress Report","Portfolio Sosmed"]

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
    setShowPortfolioDetail(false)
    setSelectedPortfolioItem(null)
  }

  const handlePortfolioDetail = (item: any) => {
    setSelectedPortfolioItem(item)
    setShowPortfolioDetail(true)
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
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-32">
        {/* Simple animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20"></div>
          <div className="absolute left-1/4 top-1/4 h-32 w-32 md:h-64 md:w-64 animate-pulse rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-48 w-48 md:h-96 md:w-96 animate-pulse rounded-full bg-muted/20 blur-3xl [animation-delay:2s]"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 md:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
              <Badge className="bg-primary/10 text-primary text-xs md:text-sm" variant="secondary">
                Fresh Graduate · 2 Years Experience
              </Badge>
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl lg:text-7xl">
                Creative Designer
              </h1>
              <div className="my-4 md:my-8 flex items-center gap-4 text-muted-foreground">
                <span className="h-px flex-1 bg-border border-2"></span>
                <span className="text-sm tracking-widest">✦</span>
                <span className="h-px flex-1 bg-border border-2"></span>
              </div>
              <h1 className="flex flex-wrap items-center gap-2 md:gap-3 text-xl md:text-3xl lg:text-5xl font-bold tracking-wide text-foreground">
                <span>MOCH VIKRY</span>

                {/* Say Hi */}
                <span className="animate-wave text-xl md:text-2xl lg:text-5xl">👋</span>
                <span>ROMADHONI</span>

                {/* Badge Dhoni */}
                <span className="px-2 md:px-3 py-1 font-bold text-xs md:text-sm rounded-full border border-primary/40 text-primary bg-primary/5 backdrop-blur-sm">
                  DHONI
                </span>
              </h1>
              <p className="text-pretty text-base md:text-xl text-muted-foreground lg:text-2xl">
                Fresh Graduate Universitas Trunojoyo Madura
              </p>
              <p className="text-balance text-sm md:text-base leading-relaxed text-foreground/80 lg:text-lg">
                <strong>Content Planner</strong> dengan pengalaman lebih dari{" "}
                <span className="font-semibold text-primary">2 Tahun</span> dalam mengelola dan merancang strategi
                konten media sosial untuk media publikasi, organisasi kepemudaan, industri hiburan, brand sablon kaos,
                serta akun personal pemilihan umum mahasiswa. Terbiasa menyusun content planning berbasis tren dan data
                insight untuk meningkatkan jangkauan, engagement, dan performa akun.{" "}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                {/* Email */}
                <Link href="mailto:mochvikryromadhoni@gmail.com" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto gap-2 transition-transform hover:scale-105">
                    <Mail className="h-4 w-4" />
                    Hubungi Saya
                  </Button>
                </Link>

                {/* Portfolio */}
                <a href="/CV MOCH VIKRY ROMADHONI.pdf" download className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto transition-transform hover:scale-105 bg-transparent"
                  >
                    Download CV
                  </Button>
                </a>

                {/* WhatsApp */}
                <Link href="https://wa.me/6287756876130" target="_blank" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Photos Grid */}
            <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 [animation-delay:200ms] order-first md:order-last">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/profil1.jpeg"
                      alt="Designer at work"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/profil2.jpeg"
                      alt="Creative work"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 pt-4 md:pt-8">
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/profil4.jpeg"
                      alt="Design project"
                      className="aspect-[3/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg transition-transform hover:scale-105">
                    <img
                      src="/profil3.jpeg"
                      alt="UI Design"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                </div>
              </div>
              {/* Decorative floating element */}
              <div className="absolute -right-4 md:-right-8 -top-4 md:-top-8 h-24 w-24 md:h-32 md:w-32 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 h-32 w-32 md:h-40 md:w-40 rounded-full bg-muted/30 blur-2xl animate-pulse [animation-delay:1s]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Skills Section */}
      <section className="py-16 md:py-24 bg-emerald-900" id="tentang">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl text-white">Tentang Saya</h2>
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

      {/* Work Experience Section */}
      <section className="py-16 md:py-24 bg-muted/30" id="pengalaman">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="text-center text-3xl font-bold md:text-4xl">Pengalaman Kerja</h2>
              </div>
              <p className="mb-12 text-center text-muted-foreground">
                Perjalanan profesional saya di industri kreatif dan media
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:left-1/2"></div>

              <div className="space-y-12">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className={`relative animate-in fade-in slide-in-from-${
                      index % 2 === 0 ? "left" : "right"
                    }-10 duration-700`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-4 top-8 -ml-[7px] h-3.5 w-3.5 rounded-full border-4 border-background bg-primary shadow-lg md:left-1/2 animate-pulse"></div>

                      {/* Content Card */}
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                        <Card className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                          <div className={`h-1 ${job.color}`}></div>
                          <CardContent className="p-6">
                            {/* Header */}
                            <div className="mb-4 flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="mb-2 flex items-center gap-2">
                                  <div
                                    className={`inline-flex rounded-lg ${job.color} bg-opacity-10 p-2 transition-transform group-hover:scale-110`}
                                  >
                                    <job.icon className={`h-5 w-5 ${job.color.replace("bg-", "text-")}`} />
                                  </div>
                                  <Badge variant="secondary" className="text-xs">
                                    {job.type}
                                  </Badge>
                                </div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                  {job.position}
                                </h3>
                                <p className="text-base font-semibold text-muted-foreground">{job.company}</p>
                              </div>
                            </div>

                            {/* Period */}
                            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{job.period}</span>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-foreground/80">Pencapaian & Tanggung Jawab:</h4>
                              <ul className="space-y-2">
                                {job.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-foreground/70 leading-relaxed animate-in fade-in slide-in-from-left-4 duration-500"
                                    style={{ animationDelay: `${index * 150 + idx * 100}ms` }}
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Highlight Box */}
            <div className="mt-12 animate-in fade-in zoom-in-95 duration-700 [animation-delay:600ms]">
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold">Content Planner Berpengalaman</h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Dengan pengalaman lebih dari <span className="font-semibold text-primary">2 tahun</span> dalam
                        mengelola strategi konten media sosial untuk berbagai industri, termasuk media publikasi,
                        organisasi kepemudaan, brand, dan personal account. Pernah menghasilkan konten dengan capaian
                        hingga <span className="font-semibold text-primary">5 juta views</span>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <p className="mb-12 text-center text-muted-foreground">Koleksi karya terbaik saya</p>
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
                  className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 cursor-pointer"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                  onClick={() => handlePortfolioDetail(item)}
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
                          onClick={(e) => {
                            e.stopPropagation()
                            handleVideoClick(item)
                          }}
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
                    <p className="text-sm text-primary font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Klik untuk lihat detail →
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
            <div className="mt-12 rounded-lg bg-primary/5 p-6 md:p-8 border border-primary/20 animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:300ms]">
              <div className="flex gap-4 items-start">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Informasi Penting</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dokumen-dokumen di atas berisi perencanaan konten, laporan analitik, dan daftar lengkap proyek media
                    sosial yang telah ditangani. Setiap dokumen dapat diakses melalui Google Drive dan dapat diunduh
                    sesuai kebutuhan  dengan mengklik tautan di bawah ini:
                  </p>
                  <p className="mt-4">
                    <a href="https://drive.google.com/drive/folders/1IVkc-EtKMOEv51yr9M_KlCIIfqRuzE6M" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto transition-transform hover:scale-105 bg-primary text-white"
                      >
                        Link Google Drive
                      </Button>
                    </a>
                  </p>
                </div>
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
                    <Badge className="mb-3" variant="secondary">
                      {article.category}
                    </Badge>
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
                      onClick={() => window.open(article.externalLink, "_blank")}
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

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Creative Designer Portfolio. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Portfolio Detail Modal */}
      {showPortfolioDetail && selectedPortfolioItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-300 backdrop-blur-sm overflow-y-auto"
          onClick={closeAllModals}
        >
          <div
            className="relative w-full max-w-4xl my-8 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 -top-4 md:-right-6 md:-top-6 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 z-10"
              onClick={closeAllModals}
            >
              <X className="h-6 w-6" />
            </Button>

            <Card className="bg-card/95 backdrop-blur overflow-hidden">
              {/* Header Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={selectedPortfolioItem.image || "/placeholder.svg"}
                  alt={selectedPortfolioItem.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="mb-3">{selectedPortfolioItem.category}</Badge>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedPortfolioItem.title}</h2>
                  <p className="text-white/90">{selectedPortfolioItem.description}</p>
                </div>
              </div>

              <CardContent className="p-6 md:p-8 space-y-6">
                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-semibold">{selectedPortfolioItem.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tanggal</p>
                      <p className="font-semibold">{selectedPortfolioItem.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Durasi</p>
                      <p className="font-semibold">{selectedPortfolioItem.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Role</p>
                      <p className="font-semibold">{selectedPortfolioItem.role}</p>
                    </div>
                  </div>
                </div>

                {/* Tools Used */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Tools & Software</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPortfolioItem.tools?.map((tool: string, index: number) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Detail Project</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{selectedPortfolioItem.details}</p>
                </div>

                {/* Action Buttons */}
                {selectedPortfolioItem.videoUrl && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      className="flex-1 h-12"
                      onClick={() => {
                        setShowPortfolioDetail(false)
                        handleVideoClick(selectedPortfolioItem)
                      }}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Putar Video
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 h-12 bg-transparent"
                      onClick={() => {
                        window.open(selectedPortfolioItem.externalLink, "_blank")
                      }}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Buka di YouTube
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

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
