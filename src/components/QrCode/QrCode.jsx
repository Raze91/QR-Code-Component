import "./QrCode.css";
import QrCodeImg from "../../assets/image-qr-code.png";

export default function QrCode() {
    return (
        <article>
            <img src={QrCodeImg} alt="qr code front end mentor" />
            <div>
                <h1>Improve your front-end skills by building projects</h1>
                <p>
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </p>
            </div>
        </article>
    );
}
