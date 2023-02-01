import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import {useState} from "react";

export default function Chat() {

	const user = {
		name: 'Zulfikar Ata',
		avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
		
	}

	const [messages, setMessages] = useState([
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Zulfikar Ata',
				username: 'zulfikarata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'test'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'adana'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Zulfikar Ata',
				username: 'zulfikarata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Zulfikar Ata',
				username: 'zulfikarata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'test'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'adana'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Zulfikar Ata',
				username: 'zulfikarata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Zulfikar Ata',
				username: 'zulfikarata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'test'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Ali',
				username: 'Ata',
				avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'adana'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Zulfikar Ata',
				username: 'zulfikarata',
                avatar:'https://media.licdn.com/dms/image/D4D03AQFwzz6yWzQ…eta&t=BB0XNzjRC8o795DZVAYlyUF5bOH8DS-wUEvBn4hsT2M'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
	])

	return (
		<div className="flex-1">
			<Header user={user} />
			<Messages messages={messages} />
			<Reply setMessages={setMessages} />
		</div>
	)
}