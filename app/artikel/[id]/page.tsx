"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react"

export default function ArticleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const articles = [
    {
      id: 1,
      title: "Belajar dari 30+ Project Kreatif Saya",
      date: "15 Januari 2025",
      readTime: "5 menit",
      category: "Pengalaman",
      content: `
        <p>Selama masa kuliah di Universitas Trunojoyo Madura, saya berkesempatan mengerjakan lebih dari 30 project kreatif yang sangat beragam. Setiap project memberikan pelajaran berharga yang membentuk saya menjadi designer yang lebih baik.</p>

        <h2>Memulai Perjalanan Kreatif</h2>
        <p>Awalnya, saya hanya tertarik pada desain grafis sederhana. Namun seiring berjalannya waktu, saya mulai mengeksplorasi berbagai bidang kreatif lainnya seperti video editing dan social media management. Keberagaman ini membuat saya memahami bahwa kreativitas tidak memiliki batasan.</p>

        <h2>Kolaborasi adalah Kunci</h2>
        <p>Salah satu pelajaran terpenting yang saya dapatkan adalah pentingnya kolaborasi. Bekerja dengan tim dari berbagai latar belakang mengajarkan saya untuk mendengarkan, berkomunikasi dengan efektif, dan menghargai perspektif yang berbeda. Setiap anggota tim membawa keunikan yang memperkaya hasil akhir project.</p>

        <h2>Menghadapi Tantangan</h2>
        <p>Tidak semua project berjalan mulus. Ada kalanya saya menghadapi deadline yang ketat, revisi yang berkali-kali, dan tantangan teknis yang sulit. Namun, setiap tantangan ini mengajarkan saya untuk tetap tenang, berpikir kreatif dalam mencari solusi, dan tidak takut untuk meminta bantuan ketika dibutuhkan.</p>

        <h2>Tips untuk Fresh Graduate</h2>
        <ul>
          <li>Jangan takut mencoba hal baru - eksplorasi adalah bagian dari proses belajar</li>
          <li>Bangun portofolio yang beragam untuk menunjukkan fleksibilitas Anda</li>
          <li>Network dengan profesional di industri kreatif</li>
          <li>Selalu minta feedback dan gunakan untuk berkembang</li>
          <li>Tetap update dengan tren dan tools terbaru</li>
        </ul>

        <h2>Kesimpulan</h2>
        <p>30+ project yang saya kerjakan bukan hanya tentang hasil akhir, tetapi tentang proses belajar, tumbuh, dan berkembang sebagai creative designer. Setiap project adalah stepping stone menuju karir yang saya impikan di industri kreatif.</p>
      `,
    },
    {
      id: 2,
      title: "Tips Kolaborasi Tim untuk Designer Muda",
      date: "8 Januari 2025",
      readTime: "4 menit",
      category: "Tips & Trik",
      content: `
        <p>Kolaborasi yang efektif adalah kunci kesuksesan dalam industri kreatif. Sebagai designer muda, saya telah belajar bahwa kemampuan teknis saja tidak cukup - kemampuan bekerja dalam tim sama pentingnya.</p>

        <h2>Komunikasi yang Jelas</h2>
        <p>Komunikasi adalah fondasi dari kolaborasi yang baik. Selalu pastikan bahwa Anda memahami brief dengan jelas, jangan ragu untuk bertanya jika ada yang kurang jelas, dan selalu update progress Anda kepada tim.</p>

        <h2>Menghargai Perbedaan Pendapat</h2>
        <p>Setiap orang dalam tim memiliki perspektif yang berbeda, dan itu adalah kekuatan, bukan kelemahan. Belajarlah untuk mendengarkan dengan aktif dan mempertimbangkan sudut pandang orang lain sebelum mempertahankan ide Anda.</p>

        <h2>Tools Kolaborasi</h2>
        <p>Manfaatkan tools seperti Figma untuk design collaboration, Notion untuk project management, dan Slack atau Discord untuk komunikasi tim. Tools yang tepat dapat membuat kolaborasi jadi lebih efisien dan menyenangkan.</p>

        <h2>Memberikan dan Menerima Feedback</h2>
        <p>Feedback adalah gift. Ketika memberikan feedback, fokus pada konstruktif dan spesifik. Ketika menerima feedback, dengarkan dengan pikiran terbuka dan jangan defensif. Ingat, tujuannya adalah membuat project menjadi lebih baik.</p>

        <h2>Manajemen Konflik</h2>
        <p>Konflik dalam tim adalah hal yang wajar. Yang penting adalah bagaimana kita menghadapinya. Selalu fokus pada solusi, bukan pada masalah. Diskusikan dengan kepala dingin dan cari win-win solution.</p>

        <h2>Kesimpulan</h2>
        <p>Kolaborasi yang baik membutuhkan praktek dan kesabaran. Terus belajar dari setiap pengalaman bekerja dengan tim yang berbeda, dan Anda akan menjadi team player yang berharga di industri kreatif.</p>
      `,
    },
    {
      id: 3,
      title: "Tools Desain Favorit untuk Fresh Graduate",
      date: "2 Januari 2025",
      readTime: "6 menit",
      category: "Tools & Software",
      content: `
        <p>Sebagai fresh graduate yang baru memulai karir di industri kreatif, memilih tools yang tepat bisa sangat overwhelming. Berikut adalah tools favorit saya yang saya gunakan sehari-hari untuk berbagai keperluan desain.</p>

        <h2>Desain Grafis</h2>
        <h3>Adobe Photoshop</h3>
        <p>Masih menjadi standard industri untuk photo editing dan digital art. Saya menggunakan Photoshop untuk retouching, compositing, dan membuat mockup.</p>

        <h3>Adobe Illustrator</h3>
        <p>Perfect untuk vector graphics, logo design, dan ilustrasi. Illustrator adalah go-to tool saya untuk membuat brand identity dan icon sets.</p>

        <h3>Figma</h3>
        <p>Game changer untuk UI/UX design dan kolaborasi tim. Saya suka Figma karena berbasis cloud, memudahkan kolaborasi real-time dengan tim.</p>

        <h2>Video Editing</h2>
        <h3>Adobe Premiere Pro</h3>
        <p>Tool utama saya untuk video editing. Premiere Pro sangat powerful dan terintegrasi dengan baik dengan Adobe Creative Suite lainnya.</p>

        <h3>Adobe After Effects</h3>
        <p>Untuk motion graphics dan visual effects. After Effects adalah must-have untuk membuat animasi yang eye-catching.</p>

        <h3>DaVinci Resolve</h3>
        <p>Free alternative yang sangat powerful, terutama untuk color grading. Saya menggunakan DaVinci Resolve untuk project yang membutuhkan color correction profesional.</p>

        <h2>Social Media Management</h2>
        <h3>Canva</h3>
        <p>Perfect untuk quick social media posts. Canva memudahkan saya membuat konten yang menarik dengan cepat.</p>

        <h3>Later atau Buffer</h3>
        <p>Untuk scheduling posts dan analytics. Tools ini membantu saya mengelola multiple social media accounts dengan efisien.</p>

        <h2>Project Management</h2>
        <h3>Notion</h3>
        <p>All-in-one workspace untuk notes, tasks, dan dokumentasi project. Notion adalah central hub saya untuk semua project.</p>

        <h3>Trello</h3>
        <p>Simple dan visual untuk task management. Perfect untuk melacak progress project dengan kanban board.</p>

        <h2>Tips Memilih Tools</h2>
        <ul>
          <li>Mulai dengan free trials untuk mencoba berbagai tools</li>
          <li>Fokus pada tools yang paling sesuai dengan workflow Anda</li>
          <li>Jangan terjebak dalam "tool hopping" - master beberapa tools daripada superficially menggunakan banyak tools</li>
          <li>Invest dalam learning resources seperti YouTube tutorials dan online courses</li>
          <li>Join communities untuk belajar tips dan tricks dari pengguna lain</li>
        </ul>

        <h2>Kesimpulan</h2>
        <p>Tools adalah enabler untuk kreativitas Anda, bukan penentu. Yang terpenting adalah memahami fundamental design principles dan memilih tools yang membantu Anda mewujudkan visi kreatif Anda dengan efisien.</p>
      `,
    },
  ]

  const article = articles.find((a) => a.id === Number(params.id))

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Artikel tidak ditemukan</h1>
          <Button onClick={() => router.push("/#artikel")}>Kembali ke Beranda</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Dark Mode Toggle */}
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

      {/* Header with Back Button */}
      <div className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => router.push("/#artikel")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Article Header */}
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:100ms]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Back to Articles Button */}
            <div className="mt-12 border-t pt-8 animate-in fade-in duration-700 [animation-delay:200ms]">
              <Button onClick={() => router.push("/#artikel")} size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Lihat Artikel Lainnya
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
