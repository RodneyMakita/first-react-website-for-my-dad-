import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import loadinggif from './loading.gif';
import { Button, message, Popconfirm } from 'antd';
import { Analytics } from '@vercel/analytics/react';

function Contact() {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [open, setOpen] = useState(false);

    const validateForm = () => {
        const formData = new FormData(form.current);
        for (let value of formData.values()) {
            if (!value) return false; // Check if any field is empty
        }
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            message.error('Please fill out all fields.');
            return;
        }
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

        if (validateForm()) {
            setOpen(newOpen);
        } else {
            message.error('Please fill out all fields.');
        }
    };

    return (
        <section className="bg-slate-950 py-16 md:py-20 lg:py-28" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-3xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Get in touch
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
                        Have a project in mind? Let’s talk.
                    </h2>
                    <p className="mt-4 text-sm text-slate-300 md:text-base">
                        Share a few details about your home or business and our team will reach out
                        within 24 hours to discuss the best solution for you.
                    </p>
                </div>

                <div className="grid items-start justify-center gap-12 mt-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center p-6 sm:p-8 bg-slate-900/70 border border-slate-800 rounded-2xl shadow-xl shadow-slate-950/60 lg:p-10 backdrop-blur">
                            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-slate-100">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-slate-950/60 border border-slate-700 text-slate-50 text-sm md:text-base rounded-full focus:ring-2 focus:ring-sky-500 focus:border-sky-500 block w-full px-5 py-3 placeholder:text-slate-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium text-sm md:text-base text-slate-100">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-slate-950/60 border border-slate-700 text-slate-50 text-sm md:text-base rounded-full focus:ring-2 focus:ring-sky-500 focus:border-sky-500 block w-full px-5 py-3 placeholder:text-slate-500"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 font-medium text-sm md:text-base text-slate-100">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="bg-slate-950/60 border border-slate-700 text-slate-50 text-sm md:text-base rounded-full focus:ring-2 focus:ring-sky-500 focus:border-sky-500 block w-full px-5 py-3 placeholder:text-slate-500"
                                        placeholder="072 000 0000"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 font-medium text-sm md:text-base text-slate-100">
                                        How can we help?
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        name="message"
                                        className="block w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-sm md:text-base text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                        placeholder="Tell us a bit about your project, site and timeline."
                                    ></textarea>
                                </div>

                                <Popconfirm
                                    title="Send your message"
                                    description="Are you sure all your details are correct?"
                                    open={open}
                                    onOpenChange={handleOpenChange}
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Send"
                                    cancelText="Back"
                                >
                                    <Button
                                        type="submit"
                                        className="w-full px-5 py-3.5 text-sm md:text-base font-semibold text-center text-slate-950 bg-sky-400 rounded-full hover:bg-sky-300 focus:ring-2 focus:outline-none focus:ring-sky-500 disabled:opacity-70"
                                        disabled={sending}
                                    >
                                        {sending ? (
                                            <img src={loadinggif} alt="Sending..." className="w-5 h-5 inline-block mr-2" />
                                        ) : (
                                            "Send message"
                                        )}
                                    </Button>
                                </Popconfirm>

                                <p className="text-xs md:text-sm text-center text-slate-400">
                                    We’ll get back to you in less than 24 hours.
                                </p>
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div className="flex flex-col sm:flex-row sm:items-center py-6 gap-x-7 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-lg shadow-slate-950/70 p-6 md:p-8 lg:p-9">
                                <div className="mb-6 sm:mb-0 w-14 h-14 rounded-full bg-sky-500/10 ring-1 ring-sky-500/40 grid flex-none items-center justify-center">
                                    <img width="60" height="60" src="https://img.icons8.com/papercut/60/000000/phone-disconnected.png" alt="phone-disconnected" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-50">Give us a call</h3>
                                    <p className="mb-3 text-sm text-slate-300">
                                        Prefer to talk it through? We’re here to help.
                                    </p>
                                    <a href="tel:+27724158075" className="inline-flex items-center mt-1 mr-6 text-sm font-medium gap-x-2 text-sky-300 hover:text-sky-200">
                                        072 415 8075
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center py-6 gap-x-7 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-lg shadow-slate-950/70 p-6 md:p-8 lg:p-9">
                                <div className="mb-6 sm:mb-0 w-14 h-14 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/40 grid flex-none items-center justify-center">
                                    <img width="60" height="60" src="https://img.icons8.com/papercut/60/new-post.png" alt="new-post" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg sm:text-xl text-slate-50">Send an email</h3>
                                    <p className="text-slate-300 mb-3 text-sm">
                                        For quotes, support, or general questions, drop us a line.
                                    </p>
                                    <a className="inline-flex items-center mt-1 mr-5 text-sm font-medium gap-x-2 text-emerald-300 hover:text-emerald-200" href="mailto:info@mshaxen.co.za">
                                        info@mshaxen.co.za
                                    </a>
                                    <a className="inline-flex items-center mt-1 text-sm font-medium gap-x-2 text-emerald-300 hover:text-emerald-200" href="mailto:support@mshaxen.co.za">
                                        support@mshaxen.co.za
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Analytics />
        </section>
    );
}

export default Contact;
