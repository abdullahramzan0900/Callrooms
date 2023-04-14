import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
        <main>
            <main>
              {children}
            </main>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Layout