const cx = 'font-sans mx-auto my-3 max-w-screen-sm px-4 py-3 text-lg'

const Layout = ({ children, className = cx, ...props }) => (
  <main className={className} {...props}>
    <style global jsx>
      {`
        body {
          min-width: 320px;
        }
        @media (prefers-color-scheme: dark) {
          body {
            color: #fff;
            background: #000;
          }
          input {
            color: #000;
            background: #fff;
          }
        }
      `}
    </style>
    {children}
  </main>
)

export default Layout
