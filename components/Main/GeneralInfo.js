import React from "react";
import avatar from "./myAvatar.jpg";
import Image from 'next/image';
import { StyledBtn, StyledImage } from "./MainStyles";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiStackOverflowLine } from "react-icons/ri";
import { Icon } from "./Icons";

export default function GeneralInfo() {
    return (<>
        <div>
            <div className="element-center">
                <StyledImage className="element-center">
                    <Image src = {avatar} width = "200px" height = "200px" />
                </StyledImage>
            </div>

            <p className="txt-lg fw-7 py-1 m-0 element-center w-100">Nam Nguyen</p>
            <p className="m-0 py-1 txt-sm fw-5 element-center w-100">Full Stack Web Developer</p>
            <div className="px-4">   
               <hr className="m-0 mt-3"></hr>
                <div className="element-center py-4">
                    <StyledBtn className="border-outline-none border-8px">
                        <p className="m-0 p-2 border-outline-none element-center txt-md fw-6">Download CV</p>
                    </StyledBtn>
                </div>
                <div className="d-flex element-center">
                    <Icon type = "mail"/>
                    <Icon type = "github"/>
                    <Icon type = "linkedin"/>
                    <Icon type = "stackOverflow"/>
                </div>
            </div>
          
           
        </div>
    </>)
}