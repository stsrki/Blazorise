﻿#region Using directives
using Blazorise;
using Microsoft.AspNetCore.Components;
#endregion

namespace ThemeApp
{
    public partial class ThemeBackgroundOptionsFragment : ComponentBase
    {
        #region Members
        #endregion

        #region Constructors
        #endregion

        #region Methods
        #endregion

        #region Properties
        [CascadingParameter] public Theme Theme { get; set; }
        #endregion
    }
}
