import { Editor } from './editor'
import { cloneDeep } from 'lodash-es'

function App () {
  console.log(cloneDeep);
  return (
    <div className="App">
      <Editor />
    </div>
  )
}

export default App
