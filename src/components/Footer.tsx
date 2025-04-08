export default function Footer() {
  return (
    <footer className="h-40 md:h-52 bg-primary text-white flex flex-col justify-center items-center gap-2">
      <p className="text-xs text-center md:text-sm lg:text-base">
        Develop with kindness 💚 | by{" "}
        <a href="https://github.com/devguerreiro" target="_blank">
          @devguerreiro
        </a>
      </p>
      <p className="text-[10px] md:text-xs">
        Copyright &copy; 2024 devguerreiro. All rights reserved.
      </p>
    </footer>
  );
}
