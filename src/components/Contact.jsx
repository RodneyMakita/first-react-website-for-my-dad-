import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import loadinggif from './loading.gif';
import { Button, message, Popconfirm, Switch } from 'antd';
import { Analytics } from '@vercel/analytics/react';

function Contact() {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [condition, setCondition] = useState(true);
    const [open, setOpen] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);

    const validateForm = () => {
        const formData = new FormData(form.current);
        for (let [key, value] of formData.entries()) {
            if (!value) return false; // Check if any field is empty
        }
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setIsFormValid(false);
            message.error('Please fill out all fields.');
            return;
        }
        setIsFormValid(true);
        setSending(true);

        emailjs.sendForm('service_9dcjn34', 'template_lh2sx56', form.current, 'QJr7kTKXOPdy7ULGZ')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setSending(false);
                message.success('Form submitted.');
            });
    };

    const confirm = () => {
        setOpen(false);
        sendEmail(new Event('submit'));
    };

    const cancel = () => {
        setOpen(false);
        message.error('Submission canceled.');
    };

    const handleOpenChange = (newOpen) => {
        if (!newOpen) {
            setOpen(newOpen);
            return;
        }

        if (condition && validateForm()) {
            confirm(); // Automatically confirm and skip dialog if condition is true
        } else if (validateForm()) {
            setOpen(newOpen);
        } else {
            setIsFormValid(false);
            message.error('Please fill out all fields.');
        }
    };

    const changeCondition = (checked) => {
        setCondition(checked);
    };

    return (
        <div className='px-4 sm:px-6 py-16 md:py-20 lg:py-28 bg-sky-50' id='contact'>
            <div className="max-w-screen-xl mx-auto">
                <div className="max-w-2xl mx-auto lg:max-w-5xl">
                    <div className="max-w-screen-lg mx-auto text-center transition-all mb-28">
                        <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
                            If you have any questions or need assistance, please contact us.
                        </h2>
                    </div>

                    <div className="grid items-center justify-center gap-20 mt-12 lg:grid-cols-2 lg:gap-16">
                        <div className="flex flex-col justify-center p-6 sm:p-8 transition-all bg-sky-50 border border-gray-100 shadow rounded-2xl lg:p-10">
                            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium">
                                        Full Name
                                    </label>
                                    <input type="text" name="name" id="name" className="bg-sky-50 border px-6 border-gray-200 text-dark text-sm md:text-base rounded-full focus:ring-primary focus:border-primary block w-full p-3" placeholder="Joe Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium text-sm md:text-base">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" className="bg-sky-50 border px-6 border-gray-200 text-sm md:text-base rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 font-medium text-sm md:text-base">
                                        Phone Number
                                    </label>
                                    <input type="text" name="phone" id="phone" className="bg-sky-50 border px-6 text-sm md:text-base border-gray-200 rounded-full focus:ring-primary focus:border-primary block w-full p-3" placeholder="*** *** ****" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 font-medium text-sm md:text-base">
                                        Message
                                    </label>
                                    <textarea id="message" rows="4" name="message" className="block p-3 w-full px-6 text-sm md:text-base bg-sky-50 rounded-2xl border border-gray-200 focus:ring-primary focus:border-primary" placeholder="Write your thoughts here..."></textarea>
                                </div>

                                <Popconfirm
                                    title="Confirm submission"
                                    description="Are you sure you want to submit this form?"
                                    open={open}
                                    onOpenChange={handleOpenChange}
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button type="submit" className="w-full px-5 py-4 text-sm md:text-base font-medium text-center text-white bg-sky-600 rounded-full hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300" disabled={sending}>
                                        {sending ? (
                                            <img src={loadinggif} alt="Loading..." className="w-6 h-6 inline-block mr-2" />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </Popconfirm>

                                <p className="text-sm text-center">
                                    We'll get back to you in less than 24hrs.
                                </p>
                            </form>
                        </div>

                        <div className="space-y-10">
                            <div className="flex flex-col sm:flex-row sm:items-center py-6 gap-x-7 bg-sky-50 border border-gray-100 rounded-2xl shadow p-6 md:p-8 lg:p-10">
                                <div className="bg-primary mb-6 sm:mb-0 w-16 h-16 rounded-full grid flex-none items-center justify-center">
                                    <img width="60" height="60" src="https://img.icons8.com/papercut/60/000000/phone-disconnected.png" alt="phone-disconnected" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Give us a call</h3>
                                    <p className="mb-4 text-sm">We're here to help with any questions.</p>
                                    <a href="tel:+27724158075" className="inline-flex items-center mt-1 mr-6 font-medium gap-x-2 hover:text-gray-800">
                                        072 415 8075
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center py-6 gap-x-7 bg-sky-50 border border-gray-100 rounded-2xl shadow p-6 md:p-8 lg:p-10">
                                <div className="bg-primary mb-6 sm:mb-0 w-16 h-16 rounded-full grid flex-none items-center justify-center">
                                    <img width="60" height="60" src="https://img.icons8.com/papercut/60/new-post.png" alt="new-post" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl">Send an email</h3>
                                    <p className="text-gray-500 mb-4">Write us an email instead please use</p>
                                    <a className="inline-flex items-center mt-1 mr-5 font-medium gap-x-2 hover:text-gray-800" href="mailto:info@mshaxen.co.za">
                                        info@mshaxen.co.za
                                    </a>
                                    <a className="inline-flex items-center mt-1 font-medium gap-x-2" href="mailto:support@mshaxen.co.za">
                                        support@mshaxen.co.za
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="text-center mt-8">
                Whether directly execute: <Switch defaultChecked onChange={changeCondition} />
            </div> */}
            <Analytics />
        </div>
    );
}

export default Contact;
