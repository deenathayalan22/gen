#!/usr/bin/env node
import { Command } from 'commander'
import { CreateGST } from './commands/GST.js'
import { CreatePAN } from './commands/PAN.js'

const program = new Command()

program
.name('gen')
.description('Your terminal task manager!')
.version('1.0.0')

program
.command('gst')
.description('Genarate random GST')
.action(CreateGST)

program
.command('pan')
.description('Genarate random PAN')
.action(CreatePAN)



program.parse()