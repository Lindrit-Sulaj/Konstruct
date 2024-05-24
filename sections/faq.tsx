import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="px-4 my-10 md:my-14 lg:my-20">
      <div className="max-w-screen-web mx-auto flex flex-col md:flex-row gap-x-6">
        <div className='w-full md:w-2/5'>
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3'>Frequently asked questions</h2>
          <img className='hidden md:block' src="https://ik.imagekit.io/0s9lwb2yr/tr:w-400/medium-shot-architect-holding-schematics_vfF_56ncj.jpg" alt="FAQ" />
        </div>
        <div className="w-full md:w-3/5">
          <Accordion type="single" defaultValue='q1' collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>Who is Konstruct?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>What are your advantages?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What are your services?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How much does a typical project cost?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Do you work in all cities of Kosovo?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>What is the typical timeline for a project?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>Do you offer any warranty or guarantee on your work?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Can I see examples of your previous work?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q9">
              <AccordionTrigger>Where can I contact you?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque a sapiente maiores mollitia modi obcaecati voluptatibus officia est voluptate, tempore esse eaque non eius consectetur id officiis iure odit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
