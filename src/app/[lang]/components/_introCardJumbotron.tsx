import {useTranslations} from 'next-intl';


export default function IntroCardJumbotron() {
    const t = useTranslations('jumbotron');

    return (

        <section className="bg-transparent  bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold  leading-none   md:text-5xl lg:text-6xl">
                    {t('heading')}<span className="animate-wave inline-block">👋 </span>
                
                </h1>
                <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                {t('subHeading')}                    
            </p>
                {/**Icons div */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    {/**Email */}
                    <a  href = 'mailto:kimtrunghieu1998@gmail.com' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" data-name="Layer 1" viewBox="0 0 32 32" id="gmail"><path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path></svg>
                    </a>
                    {/**LinkedIn */}
                    <a className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" 
                    href="https://www.linkedin.com/in/hieukim/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            className="w-10 h-10" viewBox="0 0 192 192">
                            {
                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                    <path d="M0,192v-192h192v192z" fill="none"></path>
                                    <g fill="#0072B1"><g id="surface1">
                                        <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                                    </g>
                                    </g>
                                </g>
                            }
                        </svg>


                    </a>
                    {/**Stack Overflow */}            
                    {/* <a href = 'https://stackoverflow.com/users/3202144/ingila-ejaz' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10"><path d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z" fill="#bcbbbb" /><path d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z" fill="#f48024" /></svg>
                    </a> */}

                    {/**GitHub */}            
                    <a href='https://github.com/HieuKim' target="_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    {/**Discord */}            
                    {/* <a href="https://dis" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="w-10 h-10 "
                            textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                            viewBox="0 0 512 388.049"><path fill="#5865F2" fillRule="nonzero"
                                d="M433.713 32.491A424.231 424.231 0 00328.061.005c-4.953 8.873-9.488 18.156-13.492 27.509a393.937 393.937 0 00-58.629-4.408c-19.594 0-39.284 1.489-58.637 4.37-3.952-9.33-8.543-18.581-13.525-27.476-36.435 6.212-72.045 17.196-105.676 32.555-66.867 98.92-84.988 195.368-75.928 290.446a425.967 425.967 0 00129.563 65.03c10.447-14.103 19.806-29.116 27.752-44.74a273.827 273.827 0 01-43.716-20.862c3.665-2.658 7.249-5.396 10.712-8.055 40.496 19.019 84.745 28.94 129.514 28.94 44.77 0 89.019-9.921 129.517-28.943 3.504 2.86 7.088 5.598 10.712 8.055a275.576 275.576 0 01-43.796 20.918 311.49 311.49 0 0027.752 44.705 424.235 424.235 0 00129.65-65.019l-.011.011c10.632-110.26-18.162-205.822-76.11-290.55zM170.948 264.529c-25.249 0-46.11-22.914-46.11-51.104 0-28.189 20.135-51.304 46.029-51.304 25.895 0 46.592 23.115 46.15 51.304-.443 28.19-20.336 51.104-46.069 51.104zm170.102 0c-25.29 0-46.069-22.914-46.069-51.104 0-28.189 20.135-51.304 46.069-51.304s46.472 23.115 46.029 51.304c-.443 28.19-20.296 51.104-46.029 51.104z" />
                        </svg>
                    </a> */}
                </div>
                
            </div>
        </section>

    )
}