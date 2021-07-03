﻿using System.Runtime.CompilerServices;
using Verify.AngleSharp;
using VerifyTests;

namespace Blazorise.Tests
{
    public static class ModuleInitializer
    {
        [ModuleInitializer]
        public static void Init()
        {
            VerifyBunit.Initialize();
            HtmlPrettyPrint.All();
        }
    }
}