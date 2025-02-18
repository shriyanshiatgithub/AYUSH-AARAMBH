import YouTubeCarousel from '@/components/YouTubeCarousel/YouTubeCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      {/* Header */}
      <header className="bg-green-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">AyushAarambh</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="btn btn-link text-white">Trending News</a></li>
              <li><a href="#" className="btn btn-link text-white">Stories</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex py-8">
        {/* Latest Stories */}
        <section className="w-1/3 pr-6">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 mb-4">Latest Stories</h2>
          <ul>
            {[
              { title: 'Backpacker Hostel Chain The Hosteller raises $4M in Series A', date: 'SEP 05 2024', img: '/success/img.jpg' },
              { title: 'From Bankruptcy to Booming Business', date: 'SEP 01 2024', img: '/success/images (5).jpg' },
              { title: 'Turning Passion into Profit', date: 'Aug 31 2024', img: '/success/img2.jpeg' },
              { title: 'Against All Odds', date: 'Aug 29 2024', img: '/success/img3.jpeg' }
            ].map((story, idx) => (
              <li key={idx} className="flex mb-6">
                <div className="card w-24 h-16 bg-gray-200 rounded mr-4">
                  <Image src={story.img} alt="" width={150} height={100} className="rounded" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{story.title}</h3>
                  <p className="text-sm text-gray-600">{story.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Main Stories */}
        <section className="w-2/3">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 mb-4">Startup Stories</h2>
          {[
            { title: 'Young Innovator Disrupts the Market', author: 'Rashaad Ather', date: '20 AUG 2024', img: '/success/img4.jpg' },
            { title: 'Female Entrepreneur Leads Her Company', author: 'Tanishq Sood', date: '12 AUG 2024', img: '/success/img5.jpg' },
            { title: 'How Two College Dropouts Built a Tech Empire', author: 'Ram Shastri', date: '10 AUG 2024', img: '/success/img6.png' }
          ].map((story, idx) => (
            <article key={idx} className="flex mb-8 card shadow-md p-4">
              <div className="flex-grow pr-6">
                <h3 className="text-lg font-bold">{story.title}</h3>
                <p className="text-sm text-gray-600">By {story.author} | {story.date}</p>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <a href="#" className="btn btn-link text-blue-500">READ MORE</a>
              </div>
              <div className="w-48 h-36 bg-gray-200 rounded">
                <Image src={story.img} alt="" width={200} height={150} className="rounded" />
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* YouTube Carousel */}
      <YouTubeCarousel />

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 startuppedia. All rights reserved.</p>
      </footer>
    </div>
  );
}
