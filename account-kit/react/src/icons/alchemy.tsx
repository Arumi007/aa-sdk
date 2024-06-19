import type { SVGProps } from "react";

// eslint-disable-next-line jsdoc/require-jsdoc
export const AlchemyLogo = ({
  fill = "currentColor",
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={77}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill={fill}
      d="M24.46 8.513v-.187c0-.472-.162-.832-.484-1.082-.313-.26-.723-.39-1.23-.39-.391 0-.699.068-.923.202-.215.125-.42.318-.615.577a.48.48 0 0 1-.19.159.731.731 0 0 1-.28.043H20.3a.434.434 0 0 1-.293-.115.326.326 0 0 1-.102-.274c.03-.289.17-.573.425-.851.263-.289.61-.525 1.04-.707.43-.183.888-.274 1.377-.274.908 0 1.64.25 2.197.75.566.5.85 1.202.85 2.106v4.4a.372.372 0 0 1-.118.274.383.383 0 0 1-.278.115h-.542a.383.383 0 0 1-.278-.115.371.371 0 0 1-.118-.274v-.592c-.156.346-.488.62-.996.822a4.097 4.097 0 0 1-1.523.303c-.498 0-.942-.086-1.333-.26a2.229 2.229 0 0 1-.908-.735 1.832 1.832 0 0 1-.308-1.039c0-.72.274-1.284.82-1.687.547-.414 1.275-.693 2.183-.837l2.065-.332Zm0 1.154-1.73.274c-.634.096-1.127.255-1.479.476-.351.212-.527.481-.527.808 0 .24.113.457.337.65.225.192.567.288 1.025.288.704 0 1.275-.197 1.714-.592.44-.394.66-.908.66-1.543v-.36ZM29.262 12.87c0 .106-.039.197-.117.274a.383.383 0 0 1-.278.115h-.542a.383.383 0 0 1-.278-.115.372.372 0 0 1-.118-.274V3.407c0-.106.04-.198.118-.275a.383.383 0 0 1 .278-.115h.542c.107 0 .2.039.278.115a.372.372 0 0 1 .117.275v9.463ZM34.539 12.163c.976 0 1.635-.375 1.977-1.125a.91.91 0 0 1 .205-.303.418.418 0 0 1 .279-.087h.439c.107 0 .2.039.278.116.078.067.117.149.117.245 0 .327-.131.678-.395 1.053-.264.375-.645.692-1.143.952s-1.084.39-1.757.39c-.694 0-1.294-.145-1.802-.433a2.989 2.989 0 0 1-1.172-1.183 3.943 3.943 0 0 1-.454-1.703 9.582 9.582 0 0 1-.015-.663c0-.23.005-.394.015-.49.088-.981.425-1.78 1.01-2.395.587-.616 1.392-.923 2.418-.923.673 0 1.255.13 1.743.39.498.25.874.562 1.128.937.263.365.405.711.425 1.038a.312.312 0 0 1-.118.275.383.383 0 0 1-.278.115h-.44a.418.418 0 0 1-.278-.087.909.909 0 0 1-.205-.303c-.342-.75-1-1.125-1.977-1.125a2.05 2.05 0 0 0-1.407.534c-.4.356-.63.894-.688 1.616-.01.105-.015.279-.015.519 0 .221.005.385.015.49.068.722.298 1.26.688 1.616.4.356.87.534 1.407.534ZM46.355 12.87a.371.371 0 0 1-.117.274.383.383 0 0 1-.279.115h-.542a.383.383 0 0 1-.278-.115.371.371 0 0 1-.117-.274V9.06c0-.72-.18-1.27-.542-1.644-.361-.375-.864-.563-1.509-.563-.634 0-1.137.188-1.508.563-.362.375-.542.923-.542 1.644v3.809c0 .106-.04.197-.118.274a.383.383 0 0 1-.278.115h-.542a.383.383 0 0 1-.278-.115.372.372 0 0 1-.117-.274V3.407c0-.106.039-.198.117-.275a.383.383 0 0 1 .278-.115h.542c.108 0 .2.039.278.115a.372.372 0 0 1 .118.275v3.188a2.45 2.45 0 0 1 .878-.693c.381-.192.845-.288 1.392-.288.615 0 1.162.13 1.64.39.479.259.85.634 1.114 1.124.273.481.41 1.053.41 1.717v4.025ZM51.488 5.614c1.045 0 1.87.327 2.475.98.606.655.908 1.544.908 2.67v.389c0 .106-.039.197-.117.274a.383.383 0 0 1-.278.115h-5.039v.087c.02.635.215 1.135.586 1.5.38.356.87.534 1.465.534.488 0 .864-.063 1.128-.188a2.3 2.3 0 0 0 .732-.534.848.848 0 0 1 .205-.158.683.683 0 0 1 .264-.043h.44a.4.4 0 0 1 .292.115.326.326 0 0 1 .103.274c-.04.26-.186.529-.44.808-.244.27-.6.5-1.069.692-.459.183-1.01.274-1.655.274-.625 0-1.182-.139-1.67-.418a3.266 3.266 0 0 1-1.172-1.183 4.173 4.173 0 0 1-.513-1.688c-.019-.288-.029-.51-.029-.663 0-.154.01-.375.03-.664.058-.596.229-1.135.512-1.615.293-.481.679-.861 1.157-1.14.489-.279 1.05-.418 1.685-.418Zm2.065 3.217v-.044c0-.586-.19-1.053-.571-1.399-.371-.356-.87-.534-1.494-.534-.566 0-1.05.178-1.45.534-.39.356-.591.822-.6 1.4v.043h4.115ZM57.972 6.595c.234-.299.498-.534.79-.707.294-.183.684-.274 1.172-.274 1.143 0 1.944.418 2.403 1.255.283-.404.605-.712.966-.924.362-.22.835-.331 1.421-.331.957 0 1.665.283 2.124.85.469.568.703 1.371.703 2.41v3.996c0 .106-.039.197-.117.274a.383.383 0 0 1-.278.115h-.542a.383.383 0 0 1-.279-.115.372.372 0 0 1-.117-.274V9.018c0-1.442-.576-2.164-1.728-2.164-.527 0-.947.173-1.26.52-.312.346-.469.86-.469 1.543v3.953a.371.371 0 0 1-.117.274.383.383 0 0 1-.278.115h-.542a.383.383 0 0 1-.278-.115.372.372 0 0 1-.117-.274V9.018c0-1.442-.577-2.164-1.729-2.164-.527 0-.947.173-1.26.52-.312.346-.468.86-.468 1.543v3.953c0 .106-.04.197-.118.274a.383.383 0 0 1-.278.115h-.542a.383.383 0 0 1-.278-.115.372.372 0 0 1-.117-.274V6.147c0-.105.039-.197.117-.274a.383.383 0 0 1 .278-.115h.542c.108 0 .2.038.278.115a.372.372 0 0 1 .118.274v.448ZM71.654 15.654c-.088.23-.23.346-.425.346h-.6a.342.342 0 0 1-.25-.101.331.331 0 0 1-.102-.245c0-.039.005-.072.014-.101l1.407-3.015-2.9-6.333a.314.314 0 0 1-.015-.1c0-.097.034-.179.102-.246a.342.342 0 0 1 .25-.101h.6c.195 0 .337.115.425.346l2.255 4.905L74.7 6.104c.088-.23.23-.346.425-.346h.6c.098 0 .181.034.25.1.068.068.102.15.102.246a.317.317 0 0 1-.014.101l-4.41 9.449ZM13.853 8.487 8.935.137A.272.272 0 0 0 8.697 0a.28.28 0 0 0-.239.134L6.985 2.636a.53.53 0 0 0 0 .539l3.207 5.447a.544.544 0 0 0 .477.27h2.946a.28.28 0 0 0 .238-.136.266.266 0 0 0 0-.269ZM.96 12.851l4.919-8.35a.272.272 0 0 1 .238-.135.28.28 0 0 1 .238.135L7.829 7a.532.532 0 0 1 0 .54L4.62 12.987a.543.543 0 0 1-.475.27H1.199a.279.279 0 0 1-.24-.136.266.266 0 0 1 .002-.27ZM6.354 13.255h9.837a.278.278 0 0 0 .238-.135.265.265 0 0 0 0-.269l-1.472-2.501a.543.543 0 0 0-.477-.27H8.066a.558.558 0 0 0-.476.27L6.117 12.85a.265.265 0 0 0 .1.368c.041.024.089.036.137.036Z"
    />
  </svg>
);