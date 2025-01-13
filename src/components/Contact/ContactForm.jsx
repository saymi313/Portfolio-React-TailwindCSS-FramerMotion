const ContactForm = () => (
    <div className="glass p-6 rounded-xl w-full max-w-sm text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Let's Chat</h2>
      <form action="#" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-transparent bg-opacity-50 rounded-md focus:ring-2 focus:ring-gray-400 outline-none" required placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-transparent bg-opacity-50 rounded-md focus:ring-2 focus:ring-gray-400 outline-none" required placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full px-4 py-2 bg-transparent bg-opacity-50 rounded-md focus:ring-2 focus:ring-gray-400 outline-none" required placeholder="Enter the subject" />
        </div>
        <div>
          <label htmlFor="query" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="query" name="query" rows="4" className="w-full px-4 py-2 bg-transparent bg-opacity-50 rounded-md focus:ring-2 focus:ring-gray-400 outline-none" required placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 border-2 border-white hover:bg-gray-500 rounded-md text-white font-semibold">SUBMIT</button>
      </form>
    </div>
  );
  
  export default ContactForm;
  
  