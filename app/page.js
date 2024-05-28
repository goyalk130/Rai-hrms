"use client"
import Image from "next/image";
import UserHolder from "./components/Header/User";
import Link from "next/link"
import { Button, Input } from "antd";
import {signIn} from "next-auth/react"


export default function Page() {
  return (
    <div className=" bg-white text-primary">
      <div className="flex flex-col min-h-[100dvh] w-screen overflow-x-hidden">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">HR Management System</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <button onClick={()=>{
            signIn()
          }}>
            Sign IN
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Streamline Your HR with Our Powerful Management System
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our HR management system offers a comprehensive suite of tools to help you manage your workforce
                  efficiently. From employee onboarding to performance tracking, we've got you covered.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Automated Onboarding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Comprehensive Employee Records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Performance Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Payroll Integration</span>
                  </li>
                </ul>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="https://cdn.leonardo.ai/users/a2ae8a62-c82a-4b71-87ce-2bc23a1074fd/generations/294205fa-8244-417c-84bd-faaec302c23b/Default_A_meticulously_focused_employee_her_brow_furrowed_in_c_0.jpg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Our HR Management System?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our HR management system is designed to streamline your HR processes, improve employee engagement, and
                  boost your organization's productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automated Onboarding</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your onboarding process with our automated tools, ensuring a seamless experience for new
                  hires.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Comprehensive Records</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Centralize all employee information in one secure platform, making it easy to access and manage.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Performance Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monitor and evaluate employee performance with our intuitive tools, helping you identify areas for
                  growth and development.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Payroll Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamlessly integrate your payroll system with our HR management platform, ensuring accurate and timely
                  compensation.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Reporting and Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gain valuable insights into your workforce with our robust reporting and analytics tools, helping you
                  make data-driven decisions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Scalable and Secure</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our HR management system is designed to scale with your organization, ensuring your data is secure and
                  compliant.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Modules</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our HR Management Modules</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our HR management system offers a comprehensive suite of modules to address all your HR needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12 ">
              <img
                alt="HR Modules"
                className="mx-auto aspect-video  overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="/placeholder.svg"
              />
              <div className="flex flex-col justify-center space-y-4 !text-wrap ">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Employee Management</h3>
                      <p className="text-gray-500 dark:text-gray-400 !text-wrap">
                        Manage employee information, track attendance, and monitor performance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Recruitment</h3>
                      <p className="text-gray-500 dark:text-gray-400 !text-wrap">
                        Streamline your hiring process with our applicant tracking and onboarding tools.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Payroll</h3>
                      <p className="text-gray-500 dark:text-gray-400 !text-wrap">
                        Automate your payroll process and ensure accurate compensation for your employees.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Benefits Management</h3>
                      <p className="text-gray-500 dark:text-gray-400 !text-wrap">
                        Manage employee benefits, including health insurance, retirement plans, and more.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Power of Our HR Management System
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Request a demo or start your free trial today to see how our HR management system can transform your
                business.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Request Demo</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting this form, you agree to our
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 HR Management System. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
    </div>
  );
}



function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}