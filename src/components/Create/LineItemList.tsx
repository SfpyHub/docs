import React, { useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { motion } from "framer-motion";
import { Plus } from 'react-feather'

const ItemList = styled(motion.div)`
	display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg1};
  align-items: center;
`

const Item = styled(motion.div)`
	padding: 0.5rem 0.75rem 0.5rem 1rem;
	margin-bottom: 20px;
	width: 100%;
 	border: 1px solid ${({ theme }) => theme.bg2};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Label = styled(motion.div)`
	font-size: 16px;
	color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
  height: 2.2rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 12px;
`

const Amount = styled(motion.div)`
	font-family: var(--ifm-font-family-light);
	font-size: 24px;
	color: ${({ theme }) => theme.text1};
`

const NewLineItem = styled(motion.div)`
	padding: 1rem 0.75rem 1rem 1rem;
	width: 100%;
  border: 1px solid ${({ theme }) => theme.bg2};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StyledPlus = styled(Plus)`
  color: ${({ theme }) => theme.primary1};
`

const items = [{
	label: "Subtotal",
	value: '$2,000.00'
}, {
	label: "Discount",
	value: "-$150.00"
}];

const sequence = {
	items: {
		visible: i => ({
			height: "auto",
			opacity: 1,
			transition: {
	      duration: i * .3,
	      delay: i * 0.5 + i * 1.3,
	      ease: "easeOut"
	    },
		}),
		hidden: { 
			height: 0,
			opacity: 0
		}
	},
	amounts: {
		visible: i => ({
			opacity: 1,
			transition: {
	      duration: 0.5,
	      delay: (i * 0.5) + (i * 1.1) + (i + 1) * .3,
	      ease: "easeOut"
	    },
		}),
		hidden: { opacity: 0 }
	},
	new: {
		tap: {
			scale: [1, 0.9, 1],
			transition: {
	      duration: 0.5,
	      delay: 0.8,
	      ease: "easeOut"
	    },
		},
		normal: {
			scale: 1
		}
	}
}

function InputItem({ label, amount, custom }: { label: string, amount: string, custom: any }) {
  return (
    <Item custom={custom} variants={sequence.items} animate="visible" initial="hidden" exit="hidden">
      <Label>
      	{ label }
      </Label>
      <Amount custom={custom} variants={sequence.amounts} animate="visible" initial="hidden" exit="hidden">
      	{ amount }
      </Amount>
    </Item>
  );
}

export function LineItems({ }) {

	return (
		<ItemList>
			{items.map((item, i) => (
        <InputItem key={i} custom={i} label={item.label} amount={item.value} />
      ))}
      <NewLineItem variants={sequence.new} animate="tap" initial="normal" exit="normal">
      	<StyledPlus size={20} />
      </NewLineItem>
		</ItemList>
	)
}