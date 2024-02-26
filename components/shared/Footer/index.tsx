import { options } from "@/content/shared/navbar/navbar";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-secondary-lighter dark:bg-secondary-darker rounded-tl-full">
      <Container className="text-white py-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-row justify-center gap-4">
              <Link href="">
                <IconBrandGithub className="dark:opacity-75" />
              </Link>
              <span className="hidden sm:block">|</span>
              <Link href="">
                <IconBrandLinkedin className="dark:opacity-75" />{" "}
              </Link>

              <span className="hidden sm:block">|</span>
            </div>
            <div className="flex flex-row justify-center gap-4">
              {options.map((option, i) => (
                <div
                  className="flex flex-row gap-2 mb-2 after:content-['|'] after:last:content-[''] text-xs sm:text-base"
                  key={i}
                >
                  <Link className="dark:opacity-75" href="">
                    {option.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="self-center w-[80%] h-[1px] bg-white opacity-50 dark:opacity-25" />
          <p className="flex flex-row justify-center gap-1 dark:opacity-75 text-xs sm:text-base">
            <span>Made with</span>
            <IconHeart size={20} className="flex self-center dark:opacity-75" />
            <span>by Diego Grassino</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
