'use client';

import { useState } from "react";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card"
import { buttonVariants } from "@repo/ui/components/ui/button"
import Link from "next/link";


export default function Home() {
  // State to track whether the popup is open
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <img className="imgSrc" src="https://image.spreadshirtmedia.com/image-server/v1/products/T1306A1PA2673PT24X-1Y0D1046404273W46299H61610/views/1,width=550,height=550,appearanceId=1,backgroundColor=F2F2F2/it-doesnt-work-why-it-works-why-poster-18x24.jpg" />
      <div className="mainheading">
        <h1>Welcome to Tirzah's broken website</h1>
      </div>
      <Card className="w-[60px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>An absolute shit show</CardDescription>
        </CardHeader>

        <CardContent>
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input type="name" id="name" placeholder="Enter your name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="buttonStyle">
            <Button variant="destructive" onClick={togglePopup}>Join our cult</Button>
          </div>
        </CardFooter>
      </Card>



      {isPopupOpen && (

        <div>
          <div className="popup-overlay" onClick={togglePopup}></div>

          <div className="popup">
            <div className="popup-content">
              <h2>WARNING!</h2>
              <p>Are you sure you want to join the friendly cult?</p>
              <Button  variant="destructive" className= "buttonStyle">
              <Link href="/page-2">I am sure</Link>
              </Button>
              <Button variant="destructive" className="buttonStyle" onClick={togglePopup}>
                Return to safety
              </Button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

