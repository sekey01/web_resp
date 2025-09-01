export default function Map() {
  return (
    <div className="w-100 md:w-full h-100 items-center-safe justify-center m-5 p-6 border border-gray-300">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509411!2d144.95373631550443!3d-37.816279742021204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ba0a3d18f60!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sgh!4v1670000000000!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
