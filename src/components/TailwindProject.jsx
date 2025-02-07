import React from 'react';

const TailwindProject = () => {
    return (
        <div class="flex flex-col items-center justify-center">
            <div>
                <div Class="flex items-center justify-between">
                    {/* <!--Logo--> */}
                    <img src="Images/Askmeidentity 2 Logo.png" alt="" class="w-[191px] h-[110px]" />
                    {/* <!--Navigation Bar--> */}
                    <div class="flex justify-center items-center w-[900px] gap-[50px]">
                        {/* <!--Navigation Links--> */}
                        <div
                            class="flex justify-between items-center w-[350px] Home text-black text-xl font-normal font-['Righteous']">
                            <p>Home</p>
                            <p>About</p>
                            <p>Courses</p>
                            <p>Contact</p>
                        </div>
                        {/* <!--Widget Icons--> */}
                        <div class="flex justify-between items-center w-[130px]">
                            <div class="flex justify-between items-center relative left-[10px]">
                                <img src="Images/AddtoCart.png" alt="" class="" />
                                <div
                                    class="SpanWidgetCartCounterNumber w-5 h-5 pl-1.5 pr-[5.76px] py-1 text-white bg-[#2aaa94] rounded-[20px] justify-center items-center inline-flex relative left-[-10px] top-[-10px]">
                                    <p> 0 </p>
                                </div>
                            </div>
                            <img src="Images/CirclePersonAccount.svg" alt="" />
                            <img src="Images/LensSearch.svg" alt="" />
                        </div>
                        <div class="w-[229px] flex justify-between items-center Login  text-xl font-medium font-['Saira']  ">
                            <p class="relative underline leading-[35px] text-[#4a4a4a]">Login</p>
                            <button
                                class="items-center leading-snug Rectangle335 w-[138px] h-[60px] bg-gradient-to-r from-[#073e9b] to-[#7e56d8] rounded-[10px] border-2 text-white">Sign
                                Up</button>
                        </div>

                    </div>
                </div>
                {/* <!--Hero Section--> */}
                <div
                    class=" Rectangle8679 h-[750px] text-center  w-full bg-gradient-to-l from-[#04016c] to-[#4916bd] flex flex-wrap text-white justify-center">
                    <img src="Images/Ellipse 8321.png" alt=""
                        class="w-[700px] h-[700px] bg-[#ecefee]/30  rounded-full blur-3xl absolute left-[-500px]" />
                    <div class="w-[1300px] flex justify-start items-start pt-[100px] relative flex-wrap">

                        {/* <!--HeroSection Left--> */}
                        <div class="flex flex-col justify-center items-start">
                            <p
                                class="w-[460px] h-[13px] text-white/80 text-lg font-normal font-['Righteous'] uppercase leading-tight tracking-[3px]">
                                Successful coaches are visionaries </p>
                            <h1 class="w-[670px] text-[80px] text-left font-normal font-['Righteous'] leading-[90px] pt-[50px]">
                                Good <span class="text-[#4b70f6]"> coaching </span> is good teaching & nothing else. </h1>
                            {/* <!--View Cours And Get Free Consulation Buttons--> */}
                            <div class="gap-[60px] flex justify-between pt-[50px]">
                                <div
                                    class="w-[194.25px] h-[60px] rounded-[10px] border-2 border-white flex justify-center items-center ">
                                    <p
                                        class="w-[126px] text-center text-white text-lg font-normal font-['Righteous'] tracking-wide">
                                        View Course</p>
                                </div>

                                <button class="text-center text-white text-lg font-normal font-['Righteous'] tracking-wide"> Get
                                    Free Consultaion </button>
                            </div>
                            <div class="w-[489px] h-[70px] relative bg-white rounded-[7px] my-[20px]">
                                <div
                                    class="w-[258px] h-[18px] left-[35px] top-[23px] absolute text-[#4f547b] text-base font-normal font-righteous ">
                                    What do you want to learn today?</div>
                                <div
                                    class="w-[142.03px] pl-[30px] pr-[29.80px] pt-[13.27px] pb-[15.80px] left-[337px] top-[10px] absolute bg-gradient-to-r from-[#3023b2] to-[#7e56d8] rounded-[10px] justify-center items-end gap-3 inline-flex">
                                    <div class="w-5 pt-[1.67px] pb-[1.64px] justify-center items-center inline-flex"><img
                                        src="Images/LensSearch2.png" alt="" /></div>
                                    <div class="w-[50.23px] text-center text-white text-[15px] font-normal font-righteous">
                                        Search</div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Hero Section Middle Shyam Para--> */}
                        <div class="flex relative top-[-40px] ml-[50px] gap-[20px]">
                            <div>
                                <div class="Group1000014970 w-6 h-[146px] relative">
                                    <div class="Pseudo w-px h-[50px] left-[11px] top-[96px] absolute bg-[#4883ff]"></div>
                                    <div class="Pseudo w-px h-[50px] left-[11px] top-0 absolute bg-[#0093e6]"></div>
                                    <div
                                        class="flex w-6 h-6 left-0 top-[61px] absolute rounded-full bg-[#0094E7] justify-center items-center">
                                        <img src="Images/“.png" />
                                    </div>
                                </div>
                            </div>
                            <div class="relative top-[-10px] text-left">
                                <p class="text-white text-base font-normal font-['Rowdies'] leading-tight">Shyam</p>
                                <p class="w-[272px] text-white text-base font-normal font-['Righteous'] leading-normal pt-[10px]">In
                                    a coaching role, you ask the questions and rely more on your staff, who become the experts, to
                                    provide the information.</p>
                                <p class="text-[#0093e6] text-xs font-bold font-['Inter'] leading-relaxed pt-[10px]">4.9</p>
                            </div>
                        </div>
                        {/* <!--Hero Section Right Girl Picutre--> */}
                        <div class="Group1000014992 flex flex-col absolute left-[900px]">
                            <div class="Ellipse8324 w-[600px] h-[600px] bg-white/100 rounded-full blur-3xl">
                            </div>
                            <img class="BrunetteWomanHuggingLaptop1 w-[500px]  mix-blend-darken relative top-[-800px] left-[-10px]"
                                src="Images/brunette-woman-hugging-laptop 1.png" />
                        </div>
                        {/* <!--Hero Section Curve Arch--> */}
                        <div class="Group1000014990 w-[313px] h-[359px] absolute left-[50%] -bottom-[0%] ">
                            <div class="Group1000014989 w-[313px] h-[359px] left-0 top-0 absolute">
                                <div
                                    class="Rectangle8673 w-[225px] h-[318px] left-[44px] top-[41px] absolute opacity-30 rounded-tl-[500px] rounded-tr-[500px] border-2 border-white">
                                </div>
                                <div
                                    class="Rectangle8674 w-[313px] h-[359px] left-0 top-0 absolute opacity-30 rounded-tl-[500px] rounded-tr-[500px] border-2  border-white">
                                </div>
                            </div>
                            <div
                                class="Rectangle8675 w-[271px] h-[338px] left-[21px] top-[21px] absolute opacity-30 rounded-tl-[500px] rounded-tr-[500px]  border-dashed border-2 border-white">
                            </div>
                        </div>

                    </div>

                </div>
                {/* <!--Below Hero Section Spotify Amazon--> */}
                <div class="Rectangle8678  bg-gradient-to-b from-[#2e08c7] to-[#7e08c7]  w-full flex justify-center" >
                    <div class="flex items-center justify-between w-[1300px] py-[62px]">
                        <img src="Images/Spotify Logo.png" alt="" />
                        <img src="Images/AmazonLogo.png" alt="" />
                        <img src="Images/Spotify Logo.png" alt="" />
                        <img src="Images/CiscoLogo.png" alt="" />
                        <img src="Images/Logitech Logo.png" alt="" />
                        <img src="Images/AmazonLogo.png" alt="" />
                    </div>

                </div>
                {/* <!--Featured Courses Section--> */}
                <div class="pt-[100px] w-full  flex  justify-center  bg-gradient-to-b from-[#d8ebff] to-[#f0f3ff]">
                    <div class="flex flex-col w-[1600px] items-center justify-center">
                        <p class="text-[#323232] text-[45px] font-normal font-['Rowdies'] leading-[70px]"> Featured <span
                            class="text-[#4883FF]"> Course </span> </p>
                        <p
                            class="w-[947px] text-black/80 text-[25px] font-normal font-['Righteous'] uppercase leading-tight tracking-[3px] mt-[5px] mb-[150px]">
                            The feature courses are we invented our teaching part</p>
                        {/* <!--Featured Courses 6 Containers--> */}
                        <div class="flex flex-wrap gap-[20px] justify-between ">
                            {/* <!--Container1--> */}
                            <div class="rounded-md w-[480px] flex flex-col basis-3/3">
                                <img src="Images/Mask group Location Pin.png" alt="" class=" w-[480px] rounded-t-md" />
                                <div class="bg-white flex flex-col justify-between rounded-b-xl">
                                    <div class="flex justify-between p-[15px] bg-white">
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 1,957 Students
                                        </p>
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 01h 59m </p>
                                    </div>
                                    <p
                                        class="w-[447px] text-[#314360] text-[25px] font-semibold font-['Saira'] leading-[35px] p-[15px]">
                                        Motion Graphics: Create a Nice Typography Animation</p>
                                    <div class="flex justify-between p-[15px] ">
                                        <p class="text-[#4e596b] text-[22px] font-semibold font-['Saira'] leading-[35px]"> Rs.499
                                        </p>
                                        <img src="Images/PurchaseBasket.png" alt="" class="relative top-[-10px]" />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Container 2--> */}
                            <div class="rounded-md w-[480px] flex flex-col basis-3/3">
                                <img src="Images/3d-jigsaw-puzzle-pieces-pink-background-problem-solving-business-concept-3d-render-illustration 1.png"
                                    alt="" class=" w-[480px] rounded-t-md" />
                                <div class="bg-white flex flex-col justify-between rounded-b-xl">
                                    <div class="flex justify-between p-[15px] bg-white">
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 9,575 Students
                                        </p>
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 01h 59m </p>
                                    </div>
                                    <p
                                        class="w-[447px] text-[#314360] text-[25px] font-semibold font-['Saira'] leading-[35px] p-[15px]">
                                        Advance PHP knowledge with JS to make smart web</p>
                                    <div class="flex justify-between p-[15px] ">
                                        <p class="text-[#4e596b] text-[22px] font-semibold font-['Saira'] leading-[35px]"> Rs.499
                                        </p>
                                        <img src="Images/PurchaseBasket.png" alt="" class="relative top-[-10px]" />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Container 3--> */}
                            <div class="rounded-md w-[480px] flex flex-col basis-3/3">
                                <img src="Images/rocket-launch-laptop-flying-rocket-icon-business-startup-project-concept 1.png"
                                    alt="" class=" w-[480px] rounded-t-md" />
                                <div class="bg-white flex flex-col justify-between rounded-b-xl">
                                    <div class="flex justify-between p-[15px] bg-white">
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 2,957 Students
                                        </p>
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 02h 49m </p>
                                    </div>
                                    <p
                                        class="w-[447px] text-[#314360] text-[25px] font-semibold font-['Saira'] leading-[35px] p-[15px]">
                                        Education Software and PHP and JS System Script</p>
                                    <div class="flex justify-between p-[15px] ">
                                        <p class="text-[#4e596b] text-[22px] font-semibold font-['Saira'] leading-[35px]"> Rs.499
                                        </p>
                                        <img src="Images/PurchaseBasket.png" alt="" class="relative top-[-10px]" />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Container 4--> */}
                            <div class="rounded-md w-[480px] flex flex-col basis-3/3">
                                <img src="Images/red-up-arrow-coin-stacks-pink-background-financial-success-growth-concept-3d-render-illustration 1.png"
                                    alt="" class=" w-[480px] rounded-t-md" />
                                <div class="bg-white flex flex-col justify-between rounded-b-xl">
                                    <div class="flex justify-between p-[15px] bg-white">
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 5,457 Students
                                        </p>
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 01h 49m </p>
                                    </div>
                                    <p
                                        class="w-[447px] text-[#314360] text-[25px] font-semibold font-['Saira'] leading-[35px] p-[15px]">
                                        The Complete Financial Analyst Training & Investing</p>
                                    <div class="flex justify-between p-[15px] ">
                                        <p class="text-[#4e596b] text-[22px] font-semibold font-['Saira'] leading-[35px]"> Rs.499
                                        </p>
                                        <img src="Images/PurchaseBasket.png" alt="" class="relative top-[-10px]" />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Container 5--> */}
                            <div class="rounded-md w-[480px] flex flex-col basis-3/3">
                                <img src="Images/travel-concept-3d-illustration-airplane-flying-map-pin 1.png" alt=""
                                    class=" w-[480px] rounded-t-md" />
                                <div class="bg-white flex flex-col justify-between rounded-b-xl">
                                    <div class="flex justify-between p-[15px] bg-white">
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 595 Students
                                        </p>
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 01h 49m </p>
                                    </div>
                                    <p
                                        class="w-[447px] text-[#314360] text-[25px] font-semibold font-['Saira'] leading-[35px] p-[15px]">
                                        Marketing 2023: Complete Guide To Instagram Growth</p>
                                    <div class="flex justify-between p-[15px] ">
                                        <p class="text-[#4e596b] text-[22px] font-semibold font-['Saira'] leading-[35px]"> Rs.499
                                        </p>
                                        <img src="Images/PurchaseBasket.png" alt="" class="relative top-[-10px]" />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Container 6--> */}
                            <div class="rounded-md w-[480px] flex flex-col basis-3/3">
                                <img src="Images/online-banking-icon-money-saving-bank-bundles-money-coins-floating-around-purple-background 1.png"
                                    alt="" class=" w-[480px] rounded-t-md" />
                                <div class="bg-white flex flex-col justify-between rounded-b-xl">
                                    <div class="flex justify-between p-[15px] bg-white">
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 458 Students
                                        </p>
                                        <p class="text-[#4e596b] text-sm font-medium font-['Saira'] leading-[35px]"> 03h 00m </p>
                                    </div>
                                    <p
                                        class="w-[447px] text-[#314360] text-[25px] font-semibold font-['Saira'] leading-[35px] p-[15px]">
                                        Learn 3D Modelling and Design for Beginners</p>
                                    <div class="flex justify-between p-[15px] ">
                                        <p class="text-[#4e596b] text-[22px] font-semibold font-['Saira'] leading-[35px]"> Rs.499
                                        </p>
                                        <img src="Images/PurchaseBasket.png" alt="" class="relative top-[-10px]" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* <!--Explore Button--> */}
                        <button
                            class="my-[100px] w-[200px] h-[60px] bg-gradient-to-r from-[#073e9b] to-[#7e56d8] rounded-[10px] text-white text-center text-xl font-normal font-['Righteous']">Explore Courses</button>
                    </div>
                </div>
                {/* // <!--Why We need--> */}
                <div class=" h-[779px] flex bg-gradient-to-r from-[#739ee8] to-[#4e17c9] w-full text-center items-center
                justify-center py-[72px]">
                    <div class="w-[1300px] flex flex-col gap-[30px] items-center">
                        <img src="Images/Group 1000014993.png" alt="" class="absolute left-0" />
                        <p class="text-white text-[45px] font-normal font-['Righteous'] leading-[50px] ">Why <span
                            class="text-[#0E38CD] ">learn</span> with our courses?</p>
                        <p
                            class="w-[728px] text-center text-white text-[25px] font-normal font-['Saira'] leading-[35px] pb-[40px]">
                            We
                            are providing the best courses and top classes.And extradinery placement training.....</p>
                        {/* <!--3 Dotted Images Section--> */}
                        <div class="flex justify-center gap-[50px] w-[1300px]">
                            <div class="flex flex-col items-center">
                                <img src="Images/LearnVector.png" alt="" class="w-[80px] h-[80px]" />
                                <p
                                    class="w-32 text-center text-white text-[25px] font-normal font-['Righteous'] leading-loose">
                                    01. Learn </p>
                                <p
                                    class="w-[331px] text-center text-white text-lg font-normal font-['Righteous'] leading-[27px]">
                                    Learn continually. There is always
                                    “one more thing”to learn.</p>
                            </div>
                            <div> <img src="Images/DottedLineVertical.png" alt="" /></div>
                            <div class="flex flex-col items-center">
                                <img src="Images/Graduate Vector.svg" alt="" class="w-[80px] h-[80px]" />
                                <p
                                    class="w-32 text-center text-white text-[25px] font-normal font-['Righteous'] leading-loose">
                                    02.Graduate</p>
                                <p
                                    class="w-[331px] text-center text-white text-lg font-normal font-['Righteous'] leading-[27px]">
                                    Be bold,be courageous,
                                    be your best.</p>
                            </div>
                            <div> <img src="Images/DottedLineVertical.png" alt="" /></div>
                            <div class="flex flex-col items-center">
                                <img src="Images/WorkVector.svg" alt="" class="w-[80px] h-[80px]" />
                                <p
                                    class="w-32 text-center text-white text-[25px] font-normal font-['Righteous'] leading-loose">
                                    03.Work </p>
                                <p
                                    class="w-[331px] text-center text-white text-lg font-normal font-['Righteous'] leading-[27px]">
                                    Great companies are built in
                                    the office,with hard work put
                                    in by team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Top Course--> */}
                <div class="bg-gradient-to-b from-[#d8ebff] to-[#d8ebff] items-center w-full flex justify-center  h-[937px]">
                    <div class="w-[1300px] flex flex-col items-center justify-between ">
                        <p class="pt-[50px] text-[#323232] text-[45px] font-normal font-['Righteous'] leading-[30px] ]">Top
                            <span class="text-[#0E38CD]"> Categories </span></p>
                        <p
                            class="pt-[20px] pb-[100px] w-[478px]  text-center text-[#4e596b] text-[25px] font-normal font-['Righteous'] leading-[27px]">
                            100+ unique online course list designs</p>
                        {/* <!--6 Containers--> */}
                        <div class="flex justify-between gap-[10px]">
                            <div
                                class="w-[253px] h-[362px] rounded-[20px] bg-white flex flex-col items-center justify-between py-[50px] basis-7/7">
                                <img src="Images/DigitalMarketingRed.png" alt="" class="w=[90px] h-[90px]" />
                                <p
                                    class="text-center text-[#324361] text-[25px] font-normal font-['Righteous'] leading-[35px] w-[119px]">
                                    Digital Marketing </p>
                                <p class="text-center text-[#4f547b] text-lg font-normal font-['Righteous'] leading-[23px]">25
                                    Courses</p>
                            </div>
                            <div
                                class="w-[253px] h-[362px] rounded-[20px] bg-white flex flex-col items-center justify-between py-[50px] basis-7/7">
                                <img src="Images/WebDevGreen.png" alt="" class="w=[90px] h-[90px]" />
                                <p
                                    class="text-center text-[#324361] text-[25px] font-normal font-['Righteous'] leading-[35px] w-[119px]">
                                    Web Development </p>
                                <p class="text-center text-[#4f547b] text-lg font-normal font-['Righteous'] leading-[23px]">16
                                    Courses</p>
                            </div>
                            <div
                                class="w-[253px] h-[362px] rounded-[20px] bg-white flex flex-col items-center justify-between py-[50px] basis-7/7">
                                <img src="Images/Art&HumanitiesPurple.png" alt="" class="w=[90px] h-[90px]" />
                                <p
                                    class="text-center text-[#324361] text-[25px] font-normal font-['Righteous'] leading-[35px] w-[119px]">
                                    Art & Humanities </p>
                                <p class="text-center text-[#4f547b] text-lg font-normal font-['Righteous'] leading-[23px]">76
                                    Courses</p>
                            </div>
                            <div
                                class="w-[253px] h-[362px] rounded-[20px] bg-white flex flex-col items-center justify-between py-[50px] basis-7/7">
                                <img src="Images/PersonalDevYellow.png" alt="" class="w=[90px] h-[90px]" />
                                <p
                                    class="text-center text-[#324361] text-[25px] font-normal font-['Righteous'] leading-[35px] w-[119px]">
                                    Personal Development </p>
                                <p class="text-center text-[#4f547b] text-lg font-normal font-['Righteous'] leading-[23px]">22
                                    Courses</p>
                            </div>
                            <div
                                class="w-[253px] h-[362px] rounded-[20px] bg-white flex flex-col items-center justify-between py-[50px] basis-7/7">
                                <img src="Images/ITSoftGreen.png" alt="" class="w=[90px] h-[90px]" />
                                <p
                                    class="text-center text-[#324361] text-[25px] font-normal font-['Righteous'] leading-[35px] w-[119px]">
                                    IT & Software </p>
                                <p class="text-center text-[#4f547b] text-lg font-normal font-['Righteous'] leading-[23px]">110
                                    Courses</p>
                            </div>
                            <div
                                class="w-[253px] h-[362px] rounded-[20px] bg-white flex flex-col items-center justify-between py-[50px] basis-7/7">
                                <img src="Images/GraphicDesignGreen.png" class="w=[90px] h-[90px]" />
                                <p
                                    class="text-center text-[#324361] text-[25px] font-normal font-['Righteous'] leading-[35px] w-[119px]">
                                    Graphic Design </p>
                                <p class="text-center text-[#4f547b] text-lg font-normal font-['Righteous'] leading-[23px]">85
                                    Courses</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--BG Bundle--> */}
                <div class="bg-custom-gradient-5 flex flex-col items-center w-full">
                    {/* <!--Subscription Tab--> */}
                    <div class="pt-[50px] pb-0">
                        <div class="">
                            <div
                                class="py-[72px] Bg w-[1280px] bg-gradient-to-l from-[#e441ff] via-[#1801f8] to-[#00b2ff] rounded-[20px] flex justify-evenly item-center">
                                {/* <!--Subscription 3 Images Left--> */}
                                <div class="flex flex-col gap-[30px] ">
                                    <img src="Images/Ellipse 168.png" alt="" class="relative left-[-100%]" />
                                    <img src="Images/Ellipse 167.png" alt="" class="relative right-[-100%]" />
                                    <img src="Images/Ellipse 166.png" alt="" class="relative left-[-100%]" />
                                </div>
                                {/* <!--Subscription Center Content--> */}
                                <div class="">
                                    <p
                                        class="text-center text-white text-[45px] font-normal font-['Righteous'] leading-[55px] w-[541px]">
                                        Subscribe For Get Update
                                        Every New Courses
                                    </p>
                                    <p
                                        class="text-center text-white/70 text-base font-normal font-['Righteous'] leading-[30px]">
                                        20k+ students daily learn with Eduvi. Subscribe for new courses.
                                    </p>
                                    <div class="w-[509px] h-[60px] relative">
                                        <div class="w-[142px] left-[367px] top-0 absolute">
                                            <div
                                                class="w-[142px] h-[60px] left-0 top-0 absolute bg-[#0d37cd] rounded-tr-[10px] rounded-br-[10px]">
                                            </div>
                                            <div
                                                class="left-[36px] top-[21px] absolute text-right text-white text-base font-normal font-['Righteous']">
                                                Subscribe</div>
                                        </div>
                                        <div class="w-[367px] h-[60px] left-0 top-0 absolute">
                                            <div
                                                class="w-[367px] h-[60px] left-0 top-0 absolute bg-white/20 rounded-tl-[10px] rounded-bl-[10px]">
                                            </div>
                                            <div
                                                class="left-[20px] top-[15px] absolute text-white text-base font-normal font-['Righteous'] leading-[30px]">
                                                enter your email</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Subscription 3 Images Right--> */}
                                <div class="flex flex-col gap-[30px] ">
                                    <img src="Images/Ellipse 165.png" alt="" class="relative right-[-100%]" />
                                    <img src="Images/Ellipse 164.png" alt="" class="relative left-[-100%]" />
                                    <img src="Images/Ellipse 163.png" alt="" class="relative right-[-100%]" />
                                </div>

                            </div>
                            {/* <!--Subscription Background Images--> */}
                            <div class="relative z-0">
                                <img src="Images/Polygon 8.png" alt="" class="relative left-[-50px] top-[-50px] " />
                                <img src="Images/Polygon 8.png" alt="" class="relative left-[38%] top-[-480px]" />
                                <img src="Images/Polygon 8.png" alt="" class="relative left-[105%] -top-[150px]" />
                            </div>
                        </div>
                    </div>
                    {/* <!--Subscription Video Layout--> */}
                    <div class=" flex items-center justify-center relative -top-[150px] pb-100px">
                        <img src="Images/GirlWatchingVideo.png" alt="" />
                        <div class="Group512857 w-[218px] h-[207.85px]  flex items-center content-center justify-center
absolute left-[50%]">
                            <div class="Ellipse104 w-[218px] h-[207.85px] absolute opacity-20 bg-[#fffaeb] rounded-full border">
                            </div>
                            <div
                                class="Ellipse105 w-[172.03px] h-[164.01px] absolute  opacity-50 bg-[#f5ebeb] rounded-full border">
                            </div>
                            <div
                                class="Ellipse106 w-[124.57px] h-[118.77px] absolute   bg-gradient-to-l from-[#7e56d8] to-[#21b573] rounded-full border">
                            </div>
                            <img src="Images/Polygon 2.png" alt="" class=" absolute" />
                        </div>
                        <img src="Images/banner_right.png.png" alt="" class="absolute right-[-10%] top-[69%]" />

                    </div>
                    {/* <!--Testimonial Section--> */}
                    <div class="relative flex flex-col items-center  py-[100px] mb-[50px]">
                        <p
                            class="w-[512px] text-center text-[#0d37cd] text-[45px] font-normal font-['Righteous'] leading-[55px]">
                            Testimonials</p>
                        <p class="w-[811px] text-center text-[#4e596b] text-[25px] font-normal font-['Righteous'] leading-10">
                            What
                            our student say about us</p>
                        {/* <!--Testimonials 3 feedback--> */}
                        <div class="flex relative justify-around  ">
                            {/* <!--Feedback1--> */}
                            <div class="flex flex-col items-center">
                                <img src="Images/th (1) 4.png" alt="" class="relative top-[10%]" />
                                <div
                                    class="Rectangle8690 w-[550px] h-[200px] border-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between px-[50px] py-[40px]">
                                    <p
                                        class="w-[441px] h-[80.90px] text-[#7e7eaa] text-[15px] font-normal font-['Righteous'] leading-loose">
                                        Such an amazing traniner and easily understand the entire
                                        syllabus, and the guidence will be super and good to the way of explaning.
                                    </p>
                                    <img src="Images/Group 1000014987 stars.png" alt="" class="w-[138px] h-[18.93px] relative" />
                                </div>
                            </div>
                            {/* <!--Feedback2--> */}
                            <div class="flex flex-col items-center relative left-[-5px] top-[-10px] z-10">
                                <img src="Images/th (1) 4.png" alt="" class="relative top-[10%]" />
                                <div
                                    class="Rectangle8690 w-[550px] h-[200px] border-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between px-[50px] py-[40px]">
                                    <p
                                        class="w-[441px] h-[80.90px] text-[#7e7eaa] text-[15px] font-normal font-['Righteous'] leading-loose">
                                        Such an amazing traniner and easily understand the entire
                                        syllabus, and the guidence will be super and good to the way of explaning.
                                    </p>
                                    <img src="Images/Group 1000014987 stars.png" alt="" class="w-[138px] h-[18.93px] relative" />
                                </div>
                            </div>
                            {/* <!--Feedback3--> */}
                            <div class="flex flex-col items-center relative left-[-10px]">
                                <img src="Images/th (1) 4.png" alt="" class="relative top-[10%]" />
                                <div
                                    class="Rectangle8690 w-[550px] h-[200px] border-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between px-[50px] py-[40px]">
                                    <p
                                        class="w-[441px] h-[80.90px] text-[#7e7eaa] text-[15px] font-normal font-['Righteous'] leading-loose">
                                        Such an amazing traniner and easily understand the entire
                                        syllabus, and the guidence will be super and good to the way of explaning.
                                    </p>
                                    <img src="Images/Group 1000014987 stars.png" alt="" class="w-[138px] h-[18.93px] relative" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!--Footer--> */}
                <div class="w-full bg-custom-gradient-4 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center">
                    {/* <!--Footer Part1--> */}
                    <div class="flex justify-between relative  w-full px-[80px] py-[50px]">
                        <div class="text-[#0a033c] text-[25px] font-normal font-['Righteous'] w-[30%]">
                            <p>Connect</p>
                            <img src="Images/Askmeidentity 2 Logo.png" alt="" class="mix-blend-darken" />
                            <p class="w-[361.66px] opacity-50 text-black text-[15px] font-normal font-['Righteous']">Sri
                                Jagannath
                                Nivas,8-1-164/345/A/1,
                                Pragati Colony, Mailardevpally, Nawab
                                Saheb Kunta, Hyd, 500005
                            </p>
                        </div>
                        <div class="flex justify-between w-[85%] px-[30px] ">
                            <div class="">
                                <h3 class="text-[#0a033c] text-3xl font-normal font-['Righteous']">Classes</h3>
                                <p class="text-black text-xl font-normal font-['Righteous']">Classroom courses</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Virtual classroom courses</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">E-learning courses</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Video Courses</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Offline Courses</p>
                            </div>
                            <div>
                                <h3 class=" text-[#0a033c] text-3xl font-normal font-['Righteous']">Community</h3>
                                <p class="text-black text-xl font-normal font-['Righteous']">Learners</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Parteners</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Developers</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Transactions</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Blog</p>
                            </div>
                            <div>
                                <h3 class=" text-[#0a033c] text-3xl font-normal font-['Righteous']">Quick Links</h3>
                                <p class="text-black text-xl font-normal font-['Righteous']">Home</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Professional Education</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Courses</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Admissions</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Programs</p>
                            </div>
                            <div>
                                <h3 class=" text-[#0a033c] text-3xl font-normal font-['Righteous']">More</h3>
                                <p class="text-black text-xl font-normal font-['Righteous']">Press</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Investors</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Terms</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Privacy</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Help</p>
                                <p class="text-black text-xl font-normal font-['Righteous']">Contact</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Footer 2--> */}
                    <div class="w-full bg-gradient-to-b from-[#0251ad] to-[#a541c8] py-[20px]">
                        <div class="flex justify-center w-[50%] mx-auto gap-[30px]">
                            <div
                                class="w-[66px] h-[62px] bg-white rounded-full border border-[#0d37cd] flex justify-center items-center">
                                <img src="images/Instagram.png" alt="" />
                            </div>
                            <div
                                class="w-[66px] h-[62px] bg-white rounded-full border border-[#0d37cd] flex justify-center items-center">
                                <img src="images/WhatsApp.png" alt="" />
                            </div>
                            <div
                                class="w-[66px] h-[62px] bg-white rounded-full border border-[#0d37cd] flex justify-center items-center">
                                <img src="images/Twitter.png" alt="" />
                            </div>
                            <div
                                class="w-[66px] h-[62px] bg-white rounded-full border border-[#0d37cd] flex justify-center items-center">
                                <img src="images/LinkedIn.png" alt="" />
                            </div>
                            <div
                                class="w-[66px] h-[62px] bg-white rounded-full border border-[#0d37cd] flex justify-center items-center">
                                <img src="images/YouTube.png" alt="" />
                            </div>
                        </div>
                        <p class="text-center mt-[10px] text-white text-[15px] font-normal font-['Righteous']">
                            Copyright@2023 askmeidentity. All Rights Reserved
                        </p>
                    </div>

                </div>

            </div>
            </div>
            );
};

export default TailwindProject;