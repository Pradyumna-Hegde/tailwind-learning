const Notification = () => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src="logo512.png" alt="React  logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default Notification;
