import styles from "./SocialLinks.module.scss";
const LINKS = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/FlowersByBrianNY",
        icon: "facebook",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/flowersbybrian",
        icon: "instagram",
    },
    {
        label: "Tiktok",
        href: "https://www.tiktok.com/@flowersbybrian",
        icon: "tiktok",
    },
]

export default function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            {LINKS.map((link) => (
                <a key={link.label} className={styles.socialLinks__link} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                </a>
            ))}
        </div>
    )
}