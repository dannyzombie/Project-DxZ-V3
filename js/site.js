// Page features that aren't the main video player.

// "Join the Horde!" button: show or hide the social icons under it
function toggleSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    const isOpen = socialLinks.classList.toggle('open');
    document.getElementById('horde-btn').setAttribute('aria-expanded', isOpen);
}
document.getElementById('horde-btn').addEventListener('click', toggleSocialLinks);
