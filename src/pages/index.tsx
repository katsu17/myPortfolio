import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import FavoriteCell from '../components/favorite-cell'
import PortfolioCell from '../components/portfolio'
import SocialButton from '../components/social-button'
import { favorites, socials, portfolios} from '../utils/constants'
import Wrapper from '../components/wrapper'
import { useFormState } from '../../state/useFormState'
import { useSendContactForm } from '../../state/contact/useSendContactForm'
import { ContactParams } from '../../interfaces/ContactParams'
// import React, { useState } from 'react'


const Home: NextPage = () => {
//Static Forms
const [contact, handleChange] = useFormState<ContactParams>({
  name: '',
  email: '',
  message: '',
})
const [errorMessage, sendContactForm] = useSendContactForm()
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  sendContactForm(contact)
}
//Static Forms end

  return (
    <div>
      <Head>
        <title>Katsuaki Tandai</title>
        <meta name="description" content="Katsuaki Tandai Profile" />
        <meta property="og:title" content="Katsuaki Tandai Profile" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aboutkt.vercel.app/" />
        <meta property="og:image" content="./public/images/profile.jpg" />
        <meta property="og:description" content="Katsuaki Tandai Profile" />
        <meta property="og:site_name" content="Katsuaki Tandai Profile" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <div className="h-screen flex justify-center items-center bg-header bg-cover bg-fixed bg-center px-6">
          <h1 className="text-white px-12 py-6 border-4 border-white text-4xl md:text-6xl">
          Having trouble developing?
          </h1>
        </div>
      </header>
      <main>
        <Wrapper>
          <div className="md:grid md:grid-cols-2 md:grid-rows-3">
            <h2 className="text-center pb-4 text-3xl md:text-5xl md:col-start-2 md:col-end-3 md:pb-0">
              About Me
            </h2>
            <img
              className="profile-image w-44 mx-auto md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4"
              src="images/profile.jpg"
              alt="profile"
            />
            <p className="pt-4 text-lg md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:pt-0 md:pb-4">
              丹代克明（Katsuaki Tandai）<br />
              Web app developer. <br />
              Freelance engineer and markeging manager. <br />
              I&apos;m into body weight training. <br />
            </p>
            <div className="flex justify-center md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4">
              {socials.map((social) => {
                return <SocialButton key={social.name} social={social}></SocialButton>
              })}
            </div>
          </div>
        </Wrapper>
        <div className="bg-fun bg-center bg-fixed bg-cover bg-blend-darken bg-gray-400 bg-opacity-50">
          <Wrapper>
            <h2 className="text-white text-center pb-5 text-3xl md:text-5xl">Things I enjoy</h2>
            <div className="flex justify-center items-center flex-wrap">
              {favorites.map((favorite) => {
                return <FavoriteCell key={favorite.title} favorite={favorite}></FavoriteCell>
              })}
            </div>
          </Wrapper>
          <Wrapper>
            <h2 className="text-white text-center pb-5 text-3xl md:text-5xl">Portfolio</h2>
            <div className="flex justify-center items-center flex-wrap">
              {portfolios.map((portfolio) => {
                return <PortfolioCell key={portfolio.title} portfolio={portfolio}></PortfolioCell>
              })}
            </div>
          </Wrapper>
        </div>
        <div>
            <Wrapper>
              <h1 className="text-center pt-4 text-lg md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:pt-0 md:pb-4">
                Create a web app: ¥ 10,000〜<br />
                Management: ¥ 100,000〜 / Month<br />
              </h1>
              <div id="contact" className="pt-16">
                <div className="pb-4 text-3xl text-center">Contact me</div>
                {errorMessage && <p>{errorMessage}</p>}
                <form method="post" onSubmit={handleSubmit} noValidate>
                  <div className="text-center flex flex-col pb-10">
                    <div className="p-6 flex flex-col md:hidden">
                      <h1 className="pt-4 pb-4">name</h1>
  
                      <input
                        placeholder="例：山田 太郎"
                        name="name"
                        onChange={handleChange}
                        type="text"
                        className="p-2 shadow w-2/3 m-auto
                      border-input
                      border
                      border-solid
                      border-opacity-50 md:w-full"
                      />
                    </div>
                    <div className="p-6 flex flex-col md:hidden">
                      <h1 className="pt-4 pb-4">e-mail</h1>
  
                      <input
                        placeholder="example@abc.com"
                        name="email"
                        onChange={handleChange}
                        type="mailAddress"
                        className="p-2 shadow w-2/3 m-auto
                      border-input
                      border
                      border-solid
                      border-opacity-50 md:w-full"
                      />
                    </div>
  
                    <div className="hidden md:flex m-auto justify-around w-full">
                      <div></div>
                      <div className="p-6 flex flex-col w-1/3">
                        <h1 className="pt-4 pb-4">name</h1>
  
                        <input
                          placeholder="例：山田 太郎"
                          name="name"
                          onChange={handleChange}
                          type="text"
                          className="p-2 shadow w-2/3 m-auto
                        border-input
                        border
                        border-solid
                        border-opacity-50 md:h-10"
                        />
                      </div>
                      <div className="p-6 flex flex-col w-1/3">
                        <h1 className="pt-4 pb-4">e-mail</h1>
  
                        <input
                          placeholder="example@example.com"
                          name="email"
                          onChange={handleChange}
                          type="mailAddress"
                          className="p-2 shadow w-2/3 m-auto
                        border-input
                        border
                        border-solid
                        border-opacity-50 md:h-10"
                        />
                      </div>
                      <div></div>
                    </div>
  
                    <div className="p-6 flex flex-col">
                      <h1 className="pt-4 pb-4 md:hidden">message</h1>
  
                      <div className="md:hidden">
                        <textarea
                          placeholder="こちらにお問い合わせ内容をご記入ください。"
                          name="message"
                          onChange={handleChange}
                          id="inquiryContent"
                          className="p-2 shadow w-2/3 m-auto
                        border-input
                        border
                        border-solid
                        border-opacity-50"
                          p-2
                          cols={50}
                          rows={5}
                        ></textarea>
                      </div>
                      <div className="hidden md:block">
                        <h1 className="pt-4 pb-4">message</h1>
  
                        <textarea
                          placeholder="こちらにお問い合わせ内容をご記入ください。"
                          name="message"
                          onChange={handleChange}
                          id="inquiryContent"
                          className="p-2 shadow w-3/5 m-auto
                        border-input
                        border
                        border-solid
                        border-opacity-50"
                          p-2
                          cols={50}
                          rows={10}
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="mt-8 mb-8 pr-4 pl-4 border-solid border-2 border-toMenu inline-block text-lg"
                      >
                        send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Wrapper>
          </div>
      </main>
    </div>
  )
}

export default Home
