import React from "react";
import avatar from "./myAvatar.jpg";
import Image from 'next/image';
import { StyledBtn, StyledImage } from "./MainStyles";
import { Icon } from "./Icons";

export default function GeneralInfo() {
    return (<>
        <div>
            <div className="d-flex justify-content-center w-100">
                <StyledImage className="">
                    <Image alt = "my avatar" src = {avatar} width = "200px" height = "200px" />
                </StyledImage>
            </div>
            <div style = {{height:"20px"}}></div>
            <p className="d-flex justify-content-center txt-lg fw-7 py-1 m-0 w-100">Nam Nguyen</p>
            <p className="d-flex justify-content-center m-0 py-1 txt-sm fw-5 w-100">Full Stack Web Developer</p>
            <div className="px-4">   
               <hr className="m-0 mt-3"></hr>
                <div className="d-flex justify-content-center py-4">
                    <StyledBtn className=" border-outline-none border-8px">
                        <p className="d-flex justify-content-center m-0 p-2 border-outline-none txt-md fw-6">Download CV</p>
                    </StyledBtn>
                </div>
                <div className="d-flex justify-content-center">
                    <Icon type = "mail"/>
                    <Icon type = "github"/>
                    <Icon type = "linkedin"/>
                    <Icon type = "stackOverflow"/>
                </div>
            </div>
          
           
        </div>
    </>)
}