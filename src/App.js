import Footer from "./Footer"
export default function App() {
  return (
  <>
    <div class="px-28 py-20 w-screen h-full">
      <div class="flex flex-col text-4xl font-bold">
        <span>MENTAL</span>
        <span>HEALTH</span>
      </div>
      <div class="py-20 px-12 items-center">
        <div>
          <img src="png/image1.png" class="w-60 h-60"/>
        </div>
        <div class="text-6xl px-32 font-bold flex flex-col items-center justify-center">
          <div>Discover the path to</div>
          <div>mental well-being</div>
          <div class="my-8 py-4 px-6 bg-black text-white text-2xl">
            <button>Take Quiz</button>
          </div>
        </div>
        <div class="flex justify-end">
          <img src="png/image2.png" class="w-60 h-60"/>
        </div>
      </div>
    </div>
    <div class="px-20 w-full h-full">
      <div class="px-2 py-6 border-2 border-black border-l-0 border-r-0 text-3xl font-bold">
        How It Works
      </div>
      <div class="flex justify-between">
        <div class="border-2 border-black border-t-0 border-l-0 border-r-0 p-20">
          <img src="png/image.png" class="w-80 h-80"/>
          <span class="py-2 text-3xl font-semibold">Step 1</span>
          <div class="py-2 flex flex-col font-semibold">
            <span>Share your feelings. Express your </span>
            <span>thoughts and emotions to find inner </span>
            <span>peace and clarity.</span>
          </div>
        </div>
        <div class="border-2 border-black border-t-0 border-l-1 border-r-0 p-20">
          <img src="png/image4.png" class="w-80 h-80"/>
          <span class="py-2 text-3xl font-semibold">Step 2</span>
          <div class="py-2 flex flex-col font-semibold">
            <span>Explore self-care practices. </span>
            <span>Discover techniques that promote </span>
            <span>mental well-being and resilience.</span>
          </div>
        </div>
        <div class="border-2 border-black border-t-0 border-l-1 border-r-0 p-20">
          <img src="png/group1.png" class="w-84 h-80"/>
          <span class="py-2 text-3xl font-semibold">Step 3</span>
          <div class="py-2 flex flex-col font-semibold">
            <span>Connect with professionals. Seek </span>
            <span>guidance and support from experts </span>
            <span>on your mental health journey.</span>
          </div>
        </div>
      </div>
    </div>  
    <div class="px-20 py-4 w-full h-full">
      <div class="px-2 py-6 border-2 border-black border-t-0 border-l-0 border-r-0 text-3xl font-bold">
        Quiz To Check Mental Status
      </div>
    </div>
    <div class="px-20 py-4 w-full h-full">
      <div class="px-2 py-6 border-2 border-black border-l-0 border-r-0 text-3xl font-bold">
        Download PDF
      </div>
      <div class="border-2 border-r-0 border-l-0 border-t-0 border-black">
        <div>
          <div class="py-12 font-bold text-2xl">
            Take control of your mental health
          </div>
          <div class="flex flex-col text-xl">
            <span>Access a wide range of resources and support for</span>
            <span>mental health and wellness. Our platform is</span>
            <span>designed to empower young individuals.</span>
          </div>
        </div>
        <div class="my-10 flex items-start">
          <div class="columns download py-4 px-6 bg-black text-white text-xl">
            <p>
              <a href="https://drive.google.com/file/d/1M8RQRWjXBD1yfz7FHqdI4Pl-KM-0ZK1w/view?usp=drive_link" class="button"><i class="fa fa-download"></i>Download</a>
            </p>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
