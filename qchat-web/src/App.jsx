




export default function App() {
  return (
    <>
      <div className="app flex-col h-screen">
        <div className="top h-1/6 border-2 border-rose-600 flex items-center justify-between">
          <div className="logo">QChat</div>
          <div className="search-bar">search</div>
          <div className="status-bar">online</div>
          <div className="about">about</div>
          <div className="setting">settings</div>
          <div className="apps">apps</div>
          <div className="profile">profile</div>

        </div>
        <div className="bottom flex flex-row h-5/6 border-2 border-blue-600">
          <div className="left-sidebar w-32 border-2 h-full border-green-700">
            left-sidebar
          </div>
          <div className="main-window w-full border-2 h-full border-gray-800">
            main-window
          </div>
        </div>
      </div>
    </>
    
  )
}