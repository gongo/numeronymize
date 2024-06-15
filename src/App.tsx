import { useState } from 'react'
import { createTheme, ThemeProvider, Button } from 'smarthr-ui'

const theme = createTheme()

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
    </ThemeProvider>
  )
}

export default App
