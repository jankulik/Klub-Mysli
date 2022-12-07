import IconProps from '../types/IconProps';

export default function LogoOnly(props: IconProps & { iconColor?: string }) {
  const { color = "inherit", iconColor = color } = props;

  return (
    <svg className={props.className} style={props.style} viewBox="0 0 267 295" height={props.size} fill={props.color} xmlns="http://www.w3.org/2000/svg">
      <path fill={iconColor} d="M116.663 0.217384C119.837 0.217384 122.985 0.33469 126.103 0.564023C195.388 5.68536 252.657 69.0147 248.435 139.737C246.328 175.036 236.143 207.348 207.491 232.232C204.323 234.983 200.301 235.079 201.547 233.867C235.439 200.849 246.991 147.167 235.208 106.6C234.824 105.281 234.392 105.721 233.943 106.163C233.499 106.6 233.037 107.037 232.588 105.757C225.709 86.1934 214.599 64.036 195.725 48.6774C194.511 47.688 190.901 45.1534 188.868 43.9547C186.561 42.5947 184.689 41.5147 184.689 41.5147C184.689 41.5147 186.957 43.736 187.98 44.6C209.969 63.144 229.473 101.032 229.077 112.783C229.048 113.617 227.592 113.611 226.916 113.603C226.707 113.6 226.572 113.597 226.576 113.619C227.98 125.297 230.373 137.188 226.425 162.275C216.485 225.424 157.708 244.908 156.532 245.279C155.548 245.591 159.616 243.215 159.975 243.043C161.317 242.463 162.689 241.76 164.083 240.939C199.225 222.165 223.148 185.137 223.148 142.511C223.148 80.9134 173.212 30.9787 111.613 30.9787C57.5346 30.9787 12.456 69.4707 2.25462 120.551C0.834618 127.525 0.0812988 134.812 0.0812988 142.372C0.0812988 142.395 0.0826213 142.419 0.0826213 142.443C0.0826213 142.465 0.0812988 142.488 0.0812988 142.511C0.0812988 202.991 48.2306 252.193 108.285 253.959C108.947 254.467 103.557 257.397 103.557 257.397C103.557 257.397 121.469 262.841 165.956 252.896C173.525 251.204 142.895 274.255 83.012 274.957C97.7546 277.881 116.303 281.08 128.523 278.155C131.659 277.404 123.576 285.671 97.7626 285.847C67.8773 286.049 45.2106 274.009 45.2106 274.009C68.9413 288.005 96.9466 295.524 126.795 294.143C204.215 290.553 265.983 226.408 266.831 148.908C267.691 70.4494 207.093 5.95205 130.2 0.578712C126.764 0.337379 123.295 0.217384 119.796 0.217384H116.663ZM107.427 185.456C107.387 169.452 104.133 161.337 108.299 135.583C112.341 110.585 137.511 81.8467 144.313 60.3174C144.561 59.5374 145.759 59.632 146.165 60.344C151.02 68.8347 175.011 105.935 167.069 140.851C155.697 190.843 107.74 211.913 107.74 211.913C107.699 212.399 107.64 206.471 107.596 197.645C107.592 196.805 127.079 183.068 138.639 156.353C151.287 127.124 146.237 85.0561 145.544 90.2467C145.341 91.7574 142.295 131.5 135.975 146.519C125.432 171.571 108.697 185.513 107.495 185.515C107.449 185.515 107.427 185.495 107.427 185.456M54.4013 189.64C42.7906 173.952 40.7253 146.704 43.44 146.704C44.8573 146.704 58.3426 149.355 65.1133 151.984C72.5866 154.883 77.6506 157.499 85.0013 165.875C93.8866 176 94.8186 184.863 96.8986 194.129C98.3466 200.572 98.8333 206.349 98.2333 210.223C98.1453 210.793 91.6333 200.392 84.2453 191.921C79.096 186.021 74.808 182.965 69.0213 177.328C66.0586 174.441 61.7013 167.379 59.4413 163.555C59.2453 163.224 58.7386 163.452 58.8653 163.815C60.392 168.208 63.8066 176.715 68.86 181.852C77.36 190.497 81.4026 195.145 86.0546 201.561C92.4706 210.409 95.1453 215.807 94.9666 215.807C92.252 215.807 66.7573 206.336 54.4013 189.64ZM122.484 214.973C126.147 210.328 133.355 202.716 140.728 198.392C175.795 177.823 198.912 199.036 198.912 199.036C200.279 198.832 195.293 208.925 168.668 219.415C159.752 222.927 148.4 223.724 136.981 223.561C120.357 223.329 114.269 227.893 114.269 227.893C114.269 227.893 117.429 218.411 128.319 215.807C131.701 214.997 146.123 213.227 149.807 212.035C156.245 209.951 157.627 209.081 163.341 206.757C171.737 203.341 177.543 198.215 177.84 197.748C178.196 197.188 165.04 196.439 155.128 199.62C139.684 204.581 123.16 215.035 122.48 215.036C122.451 215.036 122.451 215.015 122.484 214.973" />
    </svg>
  );
}