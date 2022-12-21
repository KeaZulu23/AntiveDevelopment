import React from 'react'

import htmlPNG from '../../assets/img/tech stack/html.png'
import aws from '../../assets/img/tech stack/aws-icon.png'
import c from '../../assets/img/tech stack/c-.png'
import confluence from '../../assets/img/tech stack/confluence.png'
import css from '../../assets/img/tech stack/css-3.png'
import dart from '../../assets/img/tech stack/dart-programming-language-icon.png'
import docker from '../../assets/img/tech stack/docker-icon.png'
import heroku from '../../assets/img/tech stack/heroku.webp'
import flutter from '../../assets/img/tech stack/flutter-icon.png'
import github from '../../assets/img/tech stack/github-icon.png'
import firebase from '../../assets/img/tech stack/google-firebase-icon.png'
import jira from '../../assets/img/tech stack/jira.png'
import js from '../../assets/img/tech stack/js.png'
import mongodb from '../../assets/img/tech stack/mongodb-icon.png'
import mysql from '../../assets/img/tech stack/mysql-icon.png'
import netlify from '../../assets/img/tech stack/netlify.svg'
import nodejs from '../../assets/img/tech stack/node-js.png'
import react from '../../assets/img/tech stack/react-js-icon.png'
import reactnative from '../../assets/img/tech stack/react-native-app-icon.png'
import express from '../../assets/img/tech stack/express-logo.png'

const TechStack = () => {
  return (
    <div className="">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-black">
            <h1>Tailor-made features</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={htmlPNG}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>HTML</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={css}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>CSS3</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={js}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>JavaScript</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={dart}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Dart Programming Language</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={c}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>C++</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={nodejs}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Node.js</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={react}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>ReactJS</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={reactnative}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>React Native</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={flutter}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Flutter</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={mongodb}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>MongoDB</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={firebase}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Firebase</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={express}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Express</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={docker}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Docker</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={mysql}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>MySQL</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={confluence}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Confluence</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={jira}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Jira</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={github}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>GitHub</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={heroku}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Heroku</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={netlify}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Netlify</h2>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
              <img className width={50} height={50} viewBox="0 0 32 32" fill="none" src={aws}></img>
              </div>
              <div className="text-gray-800 dark:text-black text-2xl font-semibold text-center">
                <h2>Amazon Web Services</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechStack;
