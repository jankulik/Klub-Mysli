import LogoOnly from './LogoOnly';
import LogoWithText from './LogoWithText';

type LogoProps = {
  type?: "logo-with-text" | "logo-only";
  iconColor?: string;
  textColor?: string;
  className?: string;
  style?: any;
  size?: any;
};

export default function Logo({ type = "logo-with-text", iconColor = "#56b047", textColor = "#000000", className, style, size = "min-content" }: LogoProps) {
  return (
    <>
      {
        type == "logo-only" &&
          <LogoOnly
            color={iconColor}
            className={className}
            size={size}
            style={style}
          />
      }
      {
        type == "logo-with-text" &&
          <LogoWithText
            iconColor={iconColor}
            textColor={textColor}
            className={className}
            size={size}
            style={style}
          />
      }
    </>
  );
}
