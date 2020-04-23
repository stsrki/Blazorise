﻿#region Using directives
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
#endregion

namespace Blazorise
{
    public partial class BarDropdownToggle : BaseComponent, ICloseActivator
    {
        #region Members

        private bool visible;

        private bool isRegistered;

        private DotNetObjectReference<CloseActivatorAdapter> dotNetObjectRef;

        #endregion

        #region Methods

        protected override void OnInitialized()
        {
            if ( ParentBarDropdown != null )
            {
                Visible = ParentBarDropdown.Visible;

                ParentBarDropdown.StateChanged += OnBarDropdownStateChanged;
            }

            base.OnInitialized();
        }

        protected override async Task OnFirstAfterRenderAsync()
        {
            dotNetObjectRef ??= JSRunner.CreateDotNetObjectRef( new CloseActivatorAdapter( this ) );

            await base.OnFirstAfterRenderAsync();
        }

        protected override void BuildClasses( ClassBuilder builder )
        {
            builder.Append( ClassProvider.BarDropdownToggle( Mode ) );

            base.BuildClasses( builder );
        }

        protected override void Dispose( bool disposing )
        {
            if ( disposing )
            {
                if ( ParentBarDropdown != null )
                {
                    ParentBarDropdown.StateChanged -= OnBarDropdownStateChanged;
                }

                // make sure to unregister listener
                if ( isRegistered )
                {
                    isRegistered = false;

                    _ = JSRunner.UnregisterClosableComponent( this );
                }

                JSRunner.DisposeDotNetObjectRef( dotNetObjectRef );
            }

            base.Dispose( disposing );
        }

        protected void ClickHandler()
        {
            ParentBarDropdown?.Toggle();
        }

        public Task<bool> IsSafeToClose( string elementId, CloseReason closeReason )
        {
            return Task.FromResult( closeReason == CloseReason.EscapeClosing || elementId != ElementId );
        }

        public Task Close( CloseReason closeReason )
        {
            ParentBarDropdown?.Hide();

            return Task.CompletedTask;
        }

        private void OnBarDropdownStateChanged( object sender, BarDropdownStateEventArgs e )
        {
            Visible = e.Visible;
        }

        #endregion

        #region Properties

        /// <summary>
        /// Handles the visibility of dropdown toggle.
        /// </summary>
        [Parameter]
        public bool Visible
        {
            get => visible;
            set
            {
                visible = value;

                if ( Mode == BarMode.Horizontal )
                {
                    if ( visible )
                    {
                        isRegistered = true;

                        JSRunner.RegisterClosableComponent( dotNetObjectRef, ElementId );
                    }
                    else
                    {
                        isRegistered = false;

                        JSRunner.UnregisterClosableComponent( this );
                    }
                }

                DirtyClasses();
            }
        }

        [CascadingParameter] protected BarDropdown ParentBarDropdown { get; set; }

        [CascadingParameter( Name = "IconName" )] protected object IconName { get; set; }

        [CascadingParameter( Name = "Mode" )] protected BarMode Mode { get; set; }

        [Parameter] public RenderFragment ChildContent { get; set; }

        #endregion
    }
}
