import videoSrc from "@/assets/Logo.webm";

export default function HoldingPage() {
  return (
    <div>
      <style>
        {`
            .video-container {
              width: 100%;
              overflow: hidden;
              position: relative;
              height: 300px;  /* Adjust this value to control how much you want to crop from the bottom */
            }
  
            .video-container video {
              position: absolute;
              top: 0;
              left: 0px;
            }
          `}
      </style>

      <div className="video-container">
        <video
          width="512"
          height="384"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%" }}
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1>Hello, Brave New World</h1>
      <div className="card">
        <p>
          This is an Origin blank canvas. Work with your AI architect to fill it
          with something amazing.
        </p>
      </div>
    </div>
  );
}
