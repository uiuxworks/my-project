export default function Nav() {
  return (
    <div class="fixed max-w-[400px] mx-auto inset-x-0 bottom-0 py-4 bg-white">
      <div class="flex justify-between items-center space-x-4 w-full px-8">
        <a href="#home">
        <div class="text-center text-[#1A2637]">
          <div class="font-bold text-md">Home</div>
        </div>
        </a>
        <a href="#date">
        <div class="text-center text-[#1A2637]">
          <div class="font-bold text-md">Date</div>
        </div>
        </a>
        <a href="#rsvp">
        <div class="text-center text-[#1A2637]">
          <div class="font-bold text-md">RSVP</div>
        </div>
        </a>
        <a href="#gift">
        <div class="text-center text-[#1A2637]">
          <div class="font-bold text-md">Gift</div>
        </div>
        </a>
      </div>
    </div>
  );
}
