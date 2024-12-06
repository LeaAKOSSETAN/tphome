import React from 'react'
import Img1 from "./post1.jpg"

export default function Posts() {
  return (

                <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    
                        <h1 className="text-xl font-bold text-navy-700 dark:text-white">Recent Posts</h1>

                    
                    <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img
                            className="h-[83px] w-[83px]"
                            src={Img1}
                            alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                            Project #1 .
                            <a
                                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" ">See product details
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                            <div className="">
                                <img
                                className="h-[83px] w-[83px]"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image2.png?raw=true"
                                alt=""
                                />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">Technology behind the Blockchain</p>
                            <p className="mt-2 text-sm text-gray-600">
                            Project #1 .
                            <a className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" "> See product details</a>
                            </p>
                        </div>
                        </div>
                 
                    </div>
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img
                            className="h-[83px] w-[83px]"
                            src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image3.png?raw=true"
                            alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                            Project #1 .
                            <a
                                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" "
                            >
                                See product details
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
  
  )
}
