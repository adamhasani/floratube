export default async function Home() {
  let videos = [];
  let errorMsg = '';

  try {
    // Karena ini Next.js, fetch ini dijalankan di server Vercel. Bye-bye CORS!
    const res = await fetch('https://inv.tux.pizza/api/v1/trending?region=ID', {
      cache: 'no-store' // Supaya datanya selalu update
    });
    
    if (!res.ok) throw new Error('Gagal mengambil data dari Invidious');
    const data = await res.json();
    videos = data.slice(0, 15); // Ambil 15 video trending
  } catch (error: any) {
    errorMsg = error.message;
  }

  return (
    <main className="bg-gray-900 min-h-screen text-white p-4 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-2">FloraTube</h1>
        <p className="text-sm text-gray-400 mb-6">Bebas Iklan (Server-Side)</p>

        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
          Trending di Indonesia
        </h3>

        {errorMsg ? (
          <p className="text-red-400 bg-red-900/20 p-3 rounded">{errorMsg}</p>
        ) : (
          <div className="flex flex-col gap-4">
            {videos.map((video: any) => {
              const thumbUrl = video.videoThumbnails ? video.videoThumbnails[1].url : '';
              return (
                <div key={video.videoId} className="bg-gray-800 rounded-lg p-3 flex gap-3 hover:bg-gray-700 transition">
                  <img src={thumbUrl} alt="Thumbnail" className="w-32 h-20 object-cover rounded-md bg-gray-700" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
                    <p className="text-xs text-gray-400 mt-2">{video.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
