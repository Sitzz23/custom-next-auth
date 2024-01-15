"use client";
import React from "react";
import {
  Card,
  CardFooter,
  CardTitle,
  CardContent,
  CardHeader,
} from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className=" shadow-md w-[400px]">
      <CardHeader>
        <Header headerLabel={headerLabel} />
      </CardHeader>
      <CardContent> {children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
