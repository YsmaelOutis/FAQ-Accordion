import './App.css'
import AccordionItem from './components/AccordionItem.jsx'

function App() {

  return (
    <main>
      <img src="illustration-woman-online-mobile.svg" alt="" className='illustration-mobile'/>
      <div className="desktop-images">
        <img src="illustration-woman-online-desktop.svg" alt="" className='illustration-desktop'/>
        <img src="illustration-box-desktop.svg" alt="" className='illustration-box'/>
      </div>
      <article>
        <h1>FAQ</h1>
        <section>
          <AccordionItem
            summary={'How many team members can I invite?'}
            details={'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'}
          />
          <div className="divider"></div>
          <AccordionItem
            summary={'What is the maximum file upload size?'}
            details={'No more than 2GB. All files in your account must fit your allotted storage space.'}
          />
          <div className="divider"></div>
          <AccordionItem
            summary={'How do I reset my password?'}
            details={'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'}
          />
          <div className="divider"></div>
          <AccordionItem
            summary={'Can I cancel my subscription?'}
            details={'Yes! Send us a message and we’ll process your request no questions asked.'}
          />
          <div className="divider"></div>
          <AccordionItem
            summary={'Do you provide additional support?'}
            details={'Chat and email support is available 24/7. Phone lines are open during normal business hours.'}
          />
          <div className="divider"></div>
        </section>
      </article>
    </main>
  )
}

export default App
