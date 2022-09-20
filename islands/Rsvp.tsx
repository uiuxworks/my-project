export default function Rsvp(){
    return (
    <div class="bg-[#E7EDF4] pt-10">
        <div class="pb-8 w-full">
        <h1 class="text-center text-2xl text-[#252627]">Reservasi Kehadiran</h1>
        </div>
    {/* form  */}
    <form class="mx-auto px-10 space-y-6 pb-10">
      <div class="text-center">
            <label for="name" class="pb-2 block">
                  <span>Nama</span>
            </label>
            <input
            type="text"
            class="w-full bg-[#CFD9E6] text-xl font-bold rounded-full border-none placeholder-[#6C7581] text-black h-14 text-center focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            name="name"
            aria-label="name"
            placeholder="Masukan nama anda"
            required
            />
      </div>
      <div class="text-center">
            <label class="pb-2 block">
                  <span>Apakah Anda hadir?</span>
            </label>
            <select 
            name="status"
            class="w-full text-center text-xl font-bold bg-[#CFD9E6] pl-10 rounded-full border-none placeholder-slate-400 text-black h-14 text-center focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
            <option value="Datang">Datang</option>
            <option value="Tidak datang">Tidak datang</option>
            </select>
      </div>
      <div class="text-center">
            <fieldset class="mt-4">
                  <legend class="sr-only">Bringing</legend>
                  <div class="flex justify-center">
                    <div class="flex items-center pr-4">
                      <input id="Just Me" value="Just Me" name="extra" type="radio" checked class="h-4 w-4 border-gray-300 text-[#3A3C41] focus:ring-[#3A3C41]"></input>
                      <label for="Just Me" class="ml-3 block text-md font-medium text-gray-700">Hanya saya</label>
                    </div>
                    <div class="flex items-center">
                      <input id="+1" value="+1" name="extra" type="radio" class="h-4 w-4 border-gray-300 text-[#3A3C41] focus:ring-[#3A3C41]"></input>
                      <label for="+1" class="ml-3 block text-md font-medium text-gray-700">Plus 1</label>
                    </div>
                  </div>
                </fieldset> 
      </div>
      
      <div class="text-center ">
            <button class="w-full bg-[#3A3C41] text-white rounded-full h-10" type="submit" >Send Reservasi</button>
      </div>
      </form>
      <div class="flex justify-center">
            <img src="/divider.svg"  alt=""/>
    </div>
    </div>
);
}