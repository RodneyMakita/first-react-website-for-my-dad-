import { Analytics } from '@vercel/analytics/react';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9dcjn34', 'template_lh2sx56', form.current, 'QJr7kTKXOPdy7ULGZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

    

  return (
    <div className=' px-4 sm:px-6 py-16 md:py-20 lg:py-28 bg-sky-50  'id='contact'>
        <div class="max-w-screen-xl mx-auto">
                <div class="max-w-2xl mx-auto lg:max-w-5xl">

                 
                    <div class="max-w-screen-lg mx-auto text-center transition-all mb-28">
                        <h2 class="mb-2 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
                            If you have any questions or need assistance, please contact us.
                        </h2>
                    </div>

             
                    <div class="grid items-center justify-center gap-20 mt-12 lg:grid-cols-2 lg:gap-16 ">

                        <div class="flex flex-col justify-center p-6 sm:p-8 transition-all bg-sky-50 border border-gray-100 shadow  rounded-2xl lg:p-10">
                            
                            <form class="space-y-6"  ref={form} onSubmit={sendEmail} >



                                <div>
                                    <label for="name" class="block mb-2 text-sm md:text-base font-medium">
                                        Full Name</label>
                                    <input type="text" name="name" id="name" class="bg-sky-50 border px-6 border-gray-200 text-dark text-sm md:text-base rounded-full focus:ring-primary focus:border-primary block w-full p-3" placeholder="Joe Doe" required=""/>
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 font-medium text-sm md:text-base">
                                        Email</label>
                                    <input type="email" name="email" id="email" class="bg-sky-50 border px-6 border-gray-200 text-sm md:text-base rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 font-medium text-sm md:text-base ">
                                        Phone Number</label>
                                    <input type="text" name="phone" id="phone" class="bg-sky-50 border px-6 text-sm md:text-base border-gray-200 rounded-full focus:ring-primary focus:border-primary block w-full p-3 " placeholder="*** *** ****" required=""/>
                                </div>
                                <div>
                                    <label for="message" class="block mb-2 font-medium text-sm md:text-base ">
                                        Message</label>
                                    <textarea id=" message" rows="4" name="message" class="block p-3 w-full px-6 text-sm md:text-base  bg-sky-50 rounded-2xl border border-gray-200 focus:ring-primary focus:border-primary " placeholder="Write your thoughts here..."></textarea>
                                </div>
                                <button type="submit" class="w-full px-5 py-4 text-sm md:text-base font-medium text-center text-white bg-black rounded-full hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    Send Message
                                </button>
                            
                               
                                <p class="text-sm text-center  ">
                                    We'll get back to you in less than 24hrs.
                                </p>
                                
                            </form>
                        </div>

                        <div class="space-y-10">
                          
                            <div class="flex flex-col sm:flex-row sm:items-center py-6 gap-x-7 bg-sky-50 border border-gray-100 rounded-2xl shadow p-6 md:p-8 lg:p-10">
                                <div class="bg-primary mb-6 sm:mb-0 w-16 h-16 rounded-full grid flex-none items-center justify-center ">
                                <img width="60" height="60" src="https://img.icons8.com/papercut/60/000000/phone-disconnected.png" alt="phone-disconnected"/>
                                </div>

                                <div class="">
                                    <h3 class="font-bold text-lg">Give us a call</h3>
                                    <p class="mb-4 text-sm ">We're here to help with any questions.
                                    </p>

      
                                    <a href="tel:+27724158075" class="inline-flex items-center mt-1 mr-6 font-medium   gap-x-2 hover:text-gray-800">
                                        072 415 8075

                                    </a>
                                    
                                </div>
                            </div>
                      

                          
                            <div class="flex flex-col sm:flex-row sm:items-center py-6 gap-x-7 bg-sky-50 border border-gray-100 rounded-2xl shadow p-6 md:p-8 lg:p-10">
                                <div class="bg-primary mb-6 sm:mb-0 w-16 h-16 rounded-full grid flex-none items-center justify-center ">
                                <img width="60" height="60" src="https://img.icons8.com/papercut/60/new-post.png" alt="new-post"/>
                                </div>

                                <div>
                                    <h3 class="font-bold text-lg sm:text-xl lg:">Send an email</h3>
                                    <p class="text-gray-500 mb-4">Write us an email instead
                                        please
                                        use
                                    </p>
                                    <a class="inline-flex items-center mt-1 mr-5 font-medium gap-x-2 hover:text-gray-800 " href="mailto:info@mshaxen.co.za">
                                        info@mshaxen.co.za
                                    </a>
                                    <a class="inline-flex items-center mt-1 font-medium  gap-x-2 " href="support@mshaxen.co.za">
                                        support@mshaxen.co.za
                                    </a>
                                </div>
                            </div>
                          
                        </div>

                    

                    </div>
                </div>
            </div>
            <Analytics />
    </div>
  )
}

export default Contact