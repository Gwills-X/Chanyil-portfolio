import React from "react";

const talks = [
  {
    title: "Struggling in Your Marriage? Watch This NOW!",
    subtitle: "Marriage Reset | Nana Churcher Show LIVE",
    description:
      "In this powerful live session on Omega TV UK, Dr. Stephen and Evangelist Chanel Adorinto join Nana Churcher to discuss the 'Marriage Reset.' Dr. Stephen shares his journey from Nigeria to a PhD at the University of Sheffield, while Chanel discusses her path of spiritual surrender and ministry. Together, they dive into the core pillars of a healthy kingdom marriage: intentional communication, mutual support, and maintaining spiritual unity.",
    videoId: "3fW_VKNh8WI",
    event: "The Nana Churcher Show • Omega TV UK",
    year: "2026",
    tags: ["Marriage Reset", "Kingdom Marriage"],
  },
];

const Talks = () => {
  return (
    <section className='bg-white py-12 px-6'>
      {" "}
      {/* Reduced vertical padding from 24 to 12 */}
      <div className='max-w-5xl mx-auto'>
        {" "}
        {/* Narrower container for a tighter look */}
        {/* Section Header */}
        <div className='mb-10 text-center lg:text-left border-l-4 border-indigo-600 pl-5'>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900'>
            Featured Media
          </h2>
          <p className='text-indigo-600 font-medium'>
            Live Discussions on Faith & Life Restoration
          </p>
        </div>
        {/* Featured Video Card - More Compact */}
        {talks.map((talk, i) => (
          <div
            key={i}
            className='group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row lg:max-h-[400px]'>
            {/* Video Container - Fixed Height for Desktop */}
            <div className='lg:w-1/2 relative aspect-video'>
              <iframe
                className='w-full h-full'
                src={`https://www.youtube.com/embed/${talk.videoId}`}
                title={talk.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>

            {/* Content Container - Compacted padding */}
            <div className='lg:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white'>
              <div className='flex gap-2 mb-3'>
                {talk.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-full uppercase tracking-tighter'>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className='text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors'>
                {talk.title}
              </h3>

              <p className='text-gray-500 font-semibold mb-3 text-xs italic'>
                {talk.subtitle}
              </p>

              <p className='text-gray-600 leading-relaxed text-sm mb-6 line-clamp-3 lg:line-clamp-4'>
                {talk.description}
              </p>

              <div className='mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400'>
                <span>{talk.event}</span>
                <span>{talk.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Talks;
